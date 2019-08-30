import React, {Component} from 'react';
import Benchmarks from "./Benchmarks";
import {Button, Container, Divider, Header, Progress} from "semantic-ui-react";
import {runBenchmark} from "../lib/benchmarkRunner";

class BenchmarksPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            running: false,
            progress: 0,
            progressTotal: 0,
            benchmarks: props.benchmarks
        };
    }

    setStatePromise = (state) => new Promise(resolve => {
        this.setState(state, () => {
            setTimeout(() => resolve(), 1);
        });
    });

    onRunAll = async () => {
        await  this.setStatePromise({
            running: true,
            progress: 0,
            progressTotal: this.props.benchmarks.length
        });
        for (let i = 0; i < this.state.benchmarks.length; i++) {
            try {
                await this.setStatePromise({progress: i + 1});
                await this.onRunBenchmark(this.props.benchmarks[i]);
            } catch(e) {
                console.error(e);
            }
        }
        await this.setStatePromise({running: false});
    };

    onBenchmarkLoad = async benchmark => {
        await this.setStatePromise(state => {
            let entry = state.benchmarks.filter(benchEntry => benchEntry.name === benchmark.name)[0];
            Object.assign(entry, benchmark);
            return state;
        });
    };

    onRunBenchmark = async benchmark => {
        await this.setStatePromise(state => {
            let entry = state.benchmarks.filter(benchEntry => benchEntry.name === benchmark.name)[0];
            entry.running = true;
            return state;
        });

        let result;
        let error;
        try {
            result = await runBenchmark(benchmark, this.onBenchmarkLoad);
        } catch (e) {
            error = e;
        }

        await this.setStatePromise(state => {
            let entry = state.benchmarks.filter(benchEntry => benchEntry.name === benchmark.name)[0];
            entry.running = false;
            if (result) {
                entry.chart.options.xaxis.categories = result.categories;
                entry.series = result.series;
                entry.chart.options.colors = result.colors;
            } else if (error) {
                entry.error = error;
            } else {
                entry.error = "Unknown error";
            }
            return state;
        });

        return result;
    };

    render() {
        return <Container>
            <Divider hidden />
            <Header as="h1" floated="left">Benchmarks</Header>
            <Button circular color="teal" icon="play circle"
                    content="Run all benchmarks" floated="right"
                    loading={this.state.running} onClick={() => this.onRunAll()}
                    disabled={this.state.running || this.state.benchmarks.some(bench => bench.running)}/>
            {this.state.running && this.state.progressTotal
                ? <div style={{clear: 'both'}}>
                    <Progress value={this.state.progress} total={this.state.progressTotal} progress="ratio"/>
                </div>
                : null}
            <Benchmarks benchmarks={this.state.benchmarks} someRunning={this.state.running || this.state.benchmarks.some(bench => bench.running)} onRun={this.onRunBenchmark} />
            <Divider hidden />
        </Container>
    }
}

export default BenchmarksPage;

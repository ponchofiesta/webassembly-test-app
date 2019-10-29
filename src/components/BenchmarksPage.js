import React, {Component} from 'react';
import {Button, Container, Divider, Header, Progress} from "semantic-ui-react";
import {runBenchmarkset} from "../lib/benchmarkRunner";
import Benchmark from "./Benchmark";

class BenchmarksPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            running: false,
            progress: 0,
            progressTotal: 0,
            benchmarksets: props.benchmarksets
        };
    }

    setStatePromise = state => new Promise(resolve => {
        this.setState(state, () => {
            setTimeout(() => resolve(), 1);
        });
    });

    onRunAllBenchmarksets = async () => {
        await  this.setStatePromise({
            running: true,
            progress: 0,
            progressTotal: this.props.benchmarksets.length
        });
        for (let i = 0; i < this.state.benchmarksets.length; i++) {
            try {
                await this.setStatePromise({progress: i + 1});
                await this.onRunBenchmarkset(this.props.benchmarksets[i]);
            } catch(e) {
                console.error(e);
            }
        }
        await this.setStatePromise({running: false});
    };

    onBenchmarksetLoad = async benchmarkset => {
        await this.setStatePromise(state => {
            let entry = state.benchmarksets.filter(entry => entry.name === benchmarkset.name)[0];
            Object.assign(entry, benchmarkset);
            return state;
        });
    };

    onRunBenchmarkset = async benchmarkset => {
        await this.setStatePromise(state => {
            let entry = state.benchmarksets.filter(entry => entry.name === benchmarkset.name)[0];
            entry.running = true;
            return state;
        });

        let result;
        let error;
        try {
            result = await runBenchmarkset(benchmarkset, this.onBenchmarksetLoad);
        } catch (e) {
            error = e;
        }

        await this.setStatePromise(state => {
            let entry = state.benchmarksets.filter(benchEntry => benchEntry.name === benchmarkset.name)[0];
            entry.running = false;
            if (result) {
                entry.chart.xaxis.categories = result.categories;
                entry.series = result.series;
                entry.chart.colors = result.colors;
            } else if (error) {
                entry.error = error;
            } else {
                entry.error = "Unknown error";
            }
            entry.canvas = null;
            return state;
        });

        return result;
    };

    render() {
        return <Container>
            <Divider hidden />
            <Header as="h1" floated="left">Benchmark-Sets</Header>
            <Button circular color="teal" icon="play circle" content="Run all benchmarks" floated="right"
                    loading={this.state.running}
                    onClick={this.onRunAllBenchmarksets}
                    disabled={this.state.running || this.state.benchmarksets.some(bench => bench.running)}/>
            {this.state.running && this.state.progressTotal
                ? <div style={{clear: 'both'}}>
                    <Progress value={this.state.progress} total={this.state.progressTotal} progress="ratio"/>
                </div>
                : null}
            <div style={{clear: 'both'}}>{
                this.state.benchmarksets.map(benchmark => {
                    return <Benchmark key={benchmark.name} {...benchmark}
                                      someRunning={this.state.running || this.state.benchmarksets.some(bench => bench.running)}
                                      onRun={this.onRunBenchmarkset} />;
                })
            }</div>
            <Divider hidden />
        </Container>
    }
}

export default BenchmarksPage;

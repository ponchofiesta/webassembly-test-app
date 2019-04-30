import React, {Component} from 'react';
import Benchmarks from "./Benchmarks";
import {Button, Container, Divider, Header, Progress} from "semantic-ui-react";
import runLater from "../lib/runLater";
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
        this.setState(state, () => resolve());
    });

    onRunAll = async () => {
        this.setStatePromise({
            running: true,
            progress: 0,
            progressTotal: this.props.benchmarks.length
        }).then(async () => {
            for (let i = 0; i < this.state.benchmarks.length; i++) {
                try {
                    this.setState({progress: i + 1});
                    let result = await this.onRunBenchmark(this.props.benchmarks[i]);
                } catch(e) {
                    console.error(e);
                }
            }
            this.setState({running: false});
        });
    };

    onRunBenchmark = benchmark => new Promise((resolve, reject) => {
        this.setState(state => {
            let entry = state.benchmarks.filter(benchEntry => benchEntry.name === benchmark.name)[0];
            entry.running = true;
            return state;
        });
        runLater(async () =>
            runBenchmark(benchmark)
                .then(result => {
                    this.onBenchmarkFinished({...benchmark, result});
                    resolve(result);
                })
                .catch(error => {
                    this.onBenchmarkFinished({...benchmark, error});
                    reject(error);
                })
        );
    });

    onBenchmarkFinished = (benchmark) => {
        this.setState(state => {
            let entry = state.benchmarks.filter(benchEntry => benchEntry.name === benchmark.name)[0];
            entry.running = false;
            if (benchmark.result) {
                entry.chart.options.xaxis.categories = benchmark.result.categories;
                entry.series = benchmark.result.series;
                entry.chart.options.colors = benchmark.result.colors;
            }
            if (benchmark.error) {
                entry.error = benchmark.error;
            }
            return state;
        });
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

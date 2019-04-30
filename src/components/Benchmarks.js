import React, {Component} from 'react';
import Benchmark from "./Benchmark";

class Benchmarks extends Component {

    render() {
        return <div style={{clear: 'both'}}>{
            this.props.benchmarks.map(benchmark => {
                return <Benchmark key={benchmark.name} {...benchmark} someRunning={this.props.someRunning} onRun={this.props.onRun} />;
            })
        }</div>
    }
}

export default Benchmarks;

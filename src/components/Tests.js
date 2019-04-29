import React, {Component} from 'react';
import Test from "./Test";

class Tests extends Component {

    render() {
        return <div style={{clear: 'both'}}>{
            this.props.tests.map(test => {
                return <Test key={test.name} {...test} onRun={this.props.onRun} />;
            })
        }</div>
    }
}

export default Tests;

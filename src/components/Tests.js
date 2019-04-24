import React, {Component} from 'react';
import Test from "./Test";

class Tests extends Component {

    constructor(props) {
        super(props);
        this.testRefs = [];
    }

    render() {
        this.testRefs = this.props.tests.map(
            test => <Test key={test.name} {...test} ref={component => this.testRefs.push(component)}/>);

        return <div style={{clear: 'both'}}>{this.testRefs}</div>
    }
}

export default Tests;

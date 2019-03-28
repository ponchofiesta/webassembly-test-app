import React, {Component} from 'react';
import Test from "./Test";

class Tests extends Component {

    render() {
        return <div>
            {
                this.props.tests.map(test => <Test key={test.name} {...test}/>)
            }
        </div>
    }
}

export default Tests;

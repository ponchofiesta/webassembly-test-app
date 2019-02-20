import React, { Component } from 'react';
import Runner from "./Runner";
import {Header, Segment} from 'semantic-ui-react'

class Test extends Component {

    render() {
        return <Segment>
            <Header>{this.props.name}</Header>
            {
                this.props.runners.map(runner => <Runner {...runner}/>)
            }
        </Segment>
    }
}

export default Test;

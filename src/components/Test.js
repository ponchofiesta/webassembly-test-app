import React, {Component} from 'react';
import Runner from "./Runner";
import {Button, Header, List, Segment} from 'semantic-ui-react'
import ResultChart from "./ResultChart";

class Test extends Component {

    run = () => {
        this.props.runners.forEach(runner => alert("runner"));
    };

    render() {
        return <Segment clearing>
            <Header floated='left'>{this.props.name}</Header>
            <Button onClick={this.run}>Run</Button>
            <List floated='right' selection verticalAlign='middle'>
                {
                    this.props.runners.map(runner => <List.Item key={runner.name}><Runner {...runner}/></List.Item>)
                }
            </List>
            <ResultChart/>
        </Segment>
    }
}

export default Test;

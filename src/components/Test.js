import React, {Component} from 'react';
import Runner from "./Runner";
import {Button, Header, List, Segment} from 'semantic-ui-react'
import ResultChart from "./ResultChart";

class Test extends Component {

    constructor(props) {
        super(props);
        this.state = {
            results: null
        };
    }

    run = () => {
        let results = [];
        this.props.runners.forEach(runner => {
            runner.object.run(runner.parameters);
            this.setState({results: runner.object.results()});
        });
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
            <ResultChart chart={this.props.chart} options={{}} series={this.state.results}/>
        </Segment>
    }
}

export default Test;

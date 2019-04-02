import React, {Component} from 'react';
import Runner from "./Runner";
import {Button, Dimmer, Header, List, Loader, Segment} from 'semantic-ui-react'
import ResultChart from "./ResultChart";

class Test extends Component {

    constructor(props) {
        super(props);
        this.state = {
            chart: props.chart,
            series: [{data: []}],
            running: false
        };
    }

    run = async () => {
        this.setState({running: true});
        let categories = [];
        let series = [{data: []}];
        const runAll = async () => {
            this.props.runners.forEach(runner => {
                runner.object.run(runner.parameters);
                categories.push(runner.name);
                series[0].data.push(runner.object.results());
            });
        };
        await runAll();
        Promise.all([runAll]).then(() => this.setState(state => {
            console.debug("all tests finished");
            state.chart.options.xaxis.categories = categories;
            state.series = series;
            state.running = false;
            return state;
        }));

    };

    render() {
        return <Segment clearing>
            <Dimmer inverted active={this.state.running}>
                <Loader disabled={!this.state.running}>Running</Loader>
            </Dimmer>
            <Header floated='left'>{this.props.name}</Header>
            <Button onClick={this.run}>Run</Button>
            <List floated='right' selection verticalAlign='middle'>
                {
                    this.props.runners.map(runner => <List.Item key={runner.name}><Runner {...runner}/></List.Item>)
                }
            </List>
                {/*<ResultChart chart={this.state.chart.component} options={this.state.chart.options} series={this.state.series}/>*/}

        </Segment>
    }
}

export default Test;

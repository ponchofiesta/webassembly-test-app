import React, {Component} from 'react';
import {Button, Dimmer, Header, Image, List, Loader, Segment} from 'semantic-ui-react'
import config from "../lib/Config";

class Test extends Component {

    constructor(props) {
        super(props);
        this.defaultSeries = [{
            name: "Duration",
            data:[]
        }];
        this.state = {
            chart: props.chart,
            series: this.defaultSeries,
            running: false
        };
    }

    startRun = () => {
        this.setState({running: true});
        setTimeout(() => {
            let result = this.run();
            this.finishRun(result);
        }, 0);
        console.debug("all tests started");
    };

    run = () => {
        let categories = [];
        let series = this.defaultSeries;
        this.props.runners.forEach(runner => {
            runner.object.run(runner.parameters);
            categories.push(runner.name);
            series[0].data.push(runner.object.results());
        });
        return {categories, series};
    };

    finishRun = result => this.setState(state => {
        console.debug("all tests finished");
        state.chart.options.xaxis.categories = result.categories;
        state.series = result.series;
        state.running = false;
        return state;
    });

    render() {
        let renderChart = false;
        // TODO: Add Babel plugin to support null safe operator: https://www.npmjs.com/package/babel-plugin-transform-optional-chaining
        if (this.state.series[0]?.data?.length > 0) {
            renderChart = true;
        }

        return <Segment>
            <Dimmer inverted active={this.state.running}>
                <Loader disabled={!this.state.running}>Running</Loader>
            </Dimmer>
            <Header as="h2" floated="left">
                {this.props.name}
                <Header.Subheader>{this.props.description}</Header.Subheader>
            </Header>
            <Button circular basic color="teal" icon="play circle" content="Run" onClick={this.startRun} floated="right"/>
            <Header as="h3" style={{clear: 'both'}}>Runners</Header>
            <List horizontal divided>
                {this.props.runners.map(runner =>
                    <List.Item key={runner.name+"-"+runner.type}>
                        <Image avatar src={config.logos[runner.type]} alt={runner.type}/>
                        <List.Content>
                            <List.Header>{runner.name}</List.Header>
                        </List.Content>
                    </List.Item>
                )}
            </List>
            {renderChart &&
                <Header as="h3">Results</Header> &&
                <this.state.chart.component options={this.state.chart.options} series={this.state.series} type="bar" />
            }
        </Segment>
    }
}

export default Test;

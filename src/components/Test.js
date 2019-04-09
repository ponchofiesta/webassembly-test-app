import React, {Component} from 'react';
import {Button, Dimmer, Header, Image, List, Loader, Segment} from 'semantic-ui-react'
import config from "../lib/Config";

class Test extends Component {

    constructor(props) {
        super(props);
        this.state = {
            chart: props.chart,
            series: [{data: []}],
            running: false
        };
    }

    startRun = () => {
        this.setState({running: true});
        setTimeout(async () => {
            let result = await this.run();
            this.finishRun(result);
        }, 0);
        console.debug("all tests started");
    };

    run = async () => {
        let categories = [];
        let series = [];
        let colors = [];
        if (this.props.parameters.dataPath) {
            let data = await fetch(this.props.parameters.dataPath);
            try {
                data = await data.json();
            } catch (e) {}
            this.props.parameters.data = data;
        }
        if (this.props.parameters.dataRepeat) {
            this.props.parameters.data = Array(this.props.parameters.dataRepeat)
                .fill(this.props.parameters.data)
                .flat();
        }
        this.props.runners.forEach((runner, index) => {
            colors.push(config.players[runner.type].color);
            for (let i = 0; i < this.props.repeat; i++) {
                let instance = runner.factory();
                instance.run(this.props.parameters);
                //categories.push(runner.type + ": " + runner.name);
                if (categories.length < this.props.repeat) {
                    categories.push(i + 1);
                }
                if (!series[index]) {
                    series[index] = {
                        //name: "Duration",
                        name: runner.type + ": " + runner.name,
                        data: []
                    };
                }
                series[index].data.push(instance.results());
            }
        });
        return {categories, series, colors};
    };

    finishRun = result => this.setState(state => {
        console.debug("all tests finished");
        state.chart.options.xaxis.categories = result.categories;
        state.series = result.series;
        state.chart.options.colors = result.colors;
        state.running = false;
        return state;
    });

    render() {
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
                        <Image avatar src={config.players[runner.type].logo} alt={runner.type}/>
                        <List.Content>
                            <List.Header>{runner.name}</List.Header>
                        </List.Content>
                    </List.Item>
                )}
            </List>
            {this.state.series[0].data.length > 0 &&
                <Header as="h3">Results</Header>}
            {this.state.series[0].data.length > 0 &&
                <this.state.chart.component
                    options={this.state.chart.options}
                    series={this.state.series}
                    {...this.state.chart.options.chart}
                    height={this.state.chart.options.chart.height * this.state.series.length * this.state.series[0].data.length + 100}
                />
            }
        </Segment>
    }
}

export default Test;

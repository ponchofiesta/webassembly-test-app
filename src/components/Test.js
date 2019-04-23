import React, {Component} from 'react';
import {Button, Dimmer, Header, Image, List, Loader, Message, Segment} from 'semantic-ui-react'
import config from "../lib/Config";

class Test extends Component {

    constructor(props) {
        super(props);
        this.state = {
            chart: props.chart,
            series: [{data: []}],
            running: false,
            errors: []
        };
    }

    startRun = () => {
        this.setState({
            running: true,
            errors: []
        });
        setTimeout(async () => {
            this.run()
                .then(result => this.finishRun(result))
                .catch(error => {
                    this.setState({
                        errors: [error.message ? error.message : error],
                        running: false
                    });
                });
        }, 0);
        console.debug("all tests started");
    };

    run = async () => {
        let categories = [];
        let series = [];
        let colors = [];
        let data = null;

        // Download external test data for JS
        if (this.props.externalData) {
            data = await fetch(this.props.externalData.path);
            try {
                data = await data.json();
            } catch (e) {}
        }
        if (this.props.externalData && this.props.externalData.repeat > 1) {
            data = Array(this.props.externalData.repeat)
                .fill(data)
                .flat();
        }
        if (data !== null) {
            this.props.externalData.data = data;
        }

        // Push test data to Go and Rust
        if (this.props.externalData && this.props.externalData.type) {
            window.wasm.rust.prepare_test_data(this.props.externalData.type, this.props.externalData.data);
            window.wasm.go.prepare_test_data(this.props.externalData.type, this.props.externalData.data);
        }

        // Run all tests
        this.props.runners.forEach((runner, index) => {
            colors.push(config.players[runner.type].color);
            for (let i = 0; i < this.props.repeat; i++) {
                if (this.props.externalData && this.props.externalData.type) {
                    if (runner.type === "rust") {
                        window.wasm.rust.reset_test_data(this.props.externalData.type);
                    }
                    if (runner.type === "go") {
                        window.wasm.go.reset_test_data(this.props.externalData.type);
                    }
                }
                let instance = runner.factory();
                instance.run(this.props.parameters, this.props.externalData);
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

        //window.wasm.rust.clear_test_data(this.props.externalData.type);
        //window.wasm.go.clear_test_data(this.props.externalData.type);

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
            {this.state.series[0].data.length ?
                <Header as="h3">Results</Header> : null}
            {this.state.series[0].data.length ?
                <this.state.chart.component
                    options={this.state.chart.options}
                    series={this.state.series}
                    {...this.state.chart.options.chart}
                    height={this.state.chart.options.chart.height * this.state.series.length * this.state.series[0].data.length + 100}
                /> : null
            }
            {this.state.errors.length ?
                <Message error header="Some tests had errors" list={this.state.errors}/> : null
            }
        </Segment>
    }
}

export default Test;

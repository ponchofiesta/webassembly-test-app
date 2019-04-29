import React, {Component} from 'react';
import {Button, Dimmer, Header, Image, List, Loader, Message, Segment} from 'semantic-ui-react'
import config from "../lib/Config";
import runLater from "../lib/runLater";

class Test extends Component {

    run = () => {
        if (this.props.onRun) {
            this.props.onRun(this.props);
        }
    };

    render() {
        return <Segment>
            <Dimmer inverted active={this.props.running}>
                <Loader disabled={!this.props.running}>Running</Loader>
            </Dimmer>
            <Header as="h2" floated="left">
                {this.props.name}
                <Header.Subheader>{this.props.description}</Header.Subheader>
            </Header>
            <Button circular basic color="teal" icon="play circle" content="Run" onClick={() => this.run()} floated="right"/>
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
            {this.props.series && this.props.series[0].data.length ?
                <React.Fragment>
                    <Header as="h3">Results</Header>
                    <this.props.chart.component
                    options={this.props.chart.options}
                    series={this.props.series}
                    {...this.props.chart.options.chart}
                    height={this.props.chart.options.chart.height * this.props.series.length * this.props.series[0].data.length + 100}
                />
                </React.Fragment>
                 : null}
            {this.props.error ?
                <Message error header="Some tests had errors" content={this.props.error}/> : null
            }
        </Segment>
    }
}

export default Test;

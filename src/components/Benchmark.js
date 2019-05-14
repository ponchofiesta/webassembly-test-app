import React, {Component} from 'react';
import {Button, Header, Image, List, Message, Segment} from 'semantic-ui-react'
import config from "../lib/Config";

class Benchmark extends Component {

    run = () => {
        if (this.props.onRun) {
            this.props.onRun(this.props);
        }
    };

    fitToParent(element) {
        const ratio = element.parentElement.clientWidth / element.width;
        if (ratio > 1) {
            return;
        }
        element.style.width = element.parentElement.clientWidth + "px";
        element.style.height = (ratio * element.height) + "px";
    }

    render() {
        return <Segment>
            {/*<Dimmer inverted active={this.props.running}>
                <Loader disabled={!this.props.running}>Running</Loader>
            </Dimmer>*/}
            <Header as="h2" floated="left">
                {this.props.name}
                <Header.Subheader>{this.props.description}</Header.Subheader>
            </Header>
            <Button circular basic color="teal" icon="play circle" content="Run" onClick={() => this.run()} floated="right"  disabled={this.props.someRunning} loading={this.props.running}/>
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

            {this.props.canvas && this.props.series && this.props.series[0].data.length ?
                <React.Fragment>
                    <Header as="h3">Canvas</Header>
                    <div ref={div => {
                        if (div) {
                            // add canvas
                            div.appendChild(this.props.canvas);
                            this.fitToParent(this.props.canvas);
                            window.addEventListener('resize', () => this.fitToParent(this.props.canvas), false);
                        }
                    }}/>
                </React.Fragment>
                : null}

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
                <Message error header="Some benchmarks had errors" content={this.props.error}/> : null
            }
        </Segment>
    }
}

export default Benchmark;

import React, {Component} from 'react';
import {Button, Header, Image, List, Message, Segment} from 'semantic-ui-react'
import config from "../lib/config";
import Chart from "react-apexcharts";

class Benchmark extends Component {

    fitToParent(element) {
        const ratio = element.parentElement.clientWidth / element.width;
        if (ratio > 1) {
            return;
        }
        element.style.width = element.parentElement.clientWidth + "px";
        element.style.height = (ratio * element.height) + "px";
    }

    setMediaElement(parent, element) {
        if (parent) {
            parent.innerHTML = "";
            parent.appendChild(element);
            this.fitToParent(element);
            window.addEventListener('resize', () => this.fitToParent(element), false);
        }
    }

    render() {
        return <Segment>
            <Header as="h2" floated="left">
                {this.props.name}
                <Header.Subheader>{this.props.description}</Header.Subheader>
            </Header>
            <Button circular basic color="teal" icon="play circle" content="Run" floated="right"
                    onClick={() => this.props.onRun(this.props)}
                    disabled={this.props.someRunning}
                    loading={this.props.running}/>
            <Header as="h3" style={{clear: 'both'}}>Benchmarks</Header>
            <List horizontal divided>
                {this.props.benchmarks.map(benchmark =>
                    <List.Item key={benchmark.name + "-" + benchmark.player}>
                        <Image avatar src={config.players[benchmark.player].logo} alt={benchmark.player}/>
                        <List.Content>
                            <List.Header>{benchmark.name}</List.Header>
                        </List.Content>
                    </List.Item>
                )}
            </List>

            {this.props.canvas
                ? <React.Fragment>
                    <Header as="h3">Canvas</Header>
                    <div ref={div => this.setMediaElement(div, this.props.canvas)}/>
                    {this.props.video
                        ? <div ref={div => this.setMediaElement(div, this.props.video)}/>
                        : null}
                </React.Fragment>
                : null}

            {this.props.series && this.props.series[0].data.length
                ? <React.Fragment>
                    <Header as="h3">Results</Header>
                    <Chart
                    options={this.props.chart}
                    series={this.props.series}
                    {...this.props.chart.chart}
                    height={this.props.chart.chart.height * this.props.series.length * this.props.series[0].data.length + 100}
                />
                </React.Fragment>
                : null}
            {this.props.error ?
                <Message error header="Some benchmarks had errors"
                         content={
                             this.props.error instanceof WebAssembly.RuntimeError
                                 ? this.props.error.stack
                                 : this.props.error} /> : null
            }
        </Segment>
    }
}

export default Benchmark;

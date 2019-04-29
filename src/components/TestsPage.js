import React, {Component} from 'react';
import Tests from "./Tests";
import {Button, Container, Divider, Header, Progress} from "semantic-ui-react";
import runLater from "../lib/runLater";
import {runTest} from "../lib/testRunner";

class TestsPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            running: false,
            progress: 0,
            progressTotal: 0,
            tests: props.tests
        };
    }

    onRunAll = async () => {
        this.setState({
            running: true,
            progress: 0,
            progressTotal: this.props.tests.length
        });
        for (let i = 0; i < this.state.progressTotal; i++) {
            try {
                let result = await this.onRunTest(this.props.tests[i]);
                this.setState({progress: i + 1});
            } catch(e) {
                console.error(e);
            }
        }
        this.setState({running: false});
    };

    onRunTest = test => new Promise((resolve, reject) => {
        this.setState(state => {
            let entry = state.tests.filter(testEntry => testEntry.name === test.name)[0];
            entry.running = true;
            return state;
        });
        runLater(async () =>
            runTest(test)
                .then(result => {
                    this.onTestFinished({...test, result});
                    resolve(result);
                })
                .catch(error => {
                    this.onTestFinished({...test, error});
                    reject(error);
                })
        );
    });

    onTestFinished = (test) => {
        this.setState(state => {
            let entry = state.tests.filter(testEntry => testEntry.name === test.name)[0];
            entry.running = false;
            if (test.result) {
                entry.chart.options.xaxis.categories = test.result.categories;
                entry.series = test.result.series;
                entry.chart.options.colors = test.result.colors;
            }
            if (test.error) {
                entry.error = test.error;
            }
            return state;
        });
    };

    render() {
        return <Container>
            <Divider hidden />
            <Header as="h1" floated="left">Tests</Header>
            <Button circular color="teal" icon="play circle" content="Run all tests" floated="right" loading={this.state.running} onClick={() => this.onRunAll()}/>
            {this.state.running && this.state.progressTotal ? <div style={{clear: 'both'}}><Progress value={this.state.progress} total={this.state.progressTotal} progress="ratio"/></div> : null}
            <Tests tests={this.state.tests} onRun={this.onRunTest} />
            <Divider hidden />
        </Container>
    }
}

export default TestsPage;

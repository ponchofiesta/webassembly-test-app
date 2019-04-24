import React, {Component} from 'react';
import Tests from "./Tests";
import {Button, Container, Divider, Header} from "semantic-ui-react";

class TestsPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            running: false
        };
        this.testsRef = React.createRef();
    }

    runAll = async () => {
        this.setState({running: true});
        for (let i = 0; i < this.testsRef.current.testRefs.length; i++) {
            try {
                let result = await this.testsRef.current.testRefs[i].startRun();
            } catch(e) {
                console.error(e);
            }
        }
        this.setState({running: false});
    };

    render() {
        return <Container>
            <Divider hidden />
            <Header as="h1" floated="left">Tests</Header>
            <Button circular color="teal" icon="play circle" content="Run all tests" floated="right" loading={this.state.running} onClick={() => this.runAll()}/>
            <Tests tests={this.props.tests} ref={this.testsRef}/>
            <Divider hidden />
        </Container>
    }
}

export default TestsPage;

import React, {Component} from 'react';
import Tests from "./Tests";
import {Container, Divider, Header} from "semantic-ui-react";

class TestsPage extends Component {
    render() {
        return <Container>
            <Divider hidden />
            <Header as='h1'>Tests</Header>
            <Tests tests={this.props.tests}/>
            <Divider hidden />
        </Container>
    }
}

export default TestsPage;

import React, { Component } from 'react';
import './WebassemblyTestApp.css';
import {HashRouter, Route, Switch} from "react-router-dom";
import TestsPage from "./TestsPage";
import Test from "./Test";
import {Message} from "semantic-ui-react";
import loadConfig from "../lib/LoadConfig";

class WebassemblyTestApp extends Component {

    constructor(props) {
        super(props);
        this.state = {error: false, config: null};
    }

    componentDidMount() {
        loadConfig()
            .then(config => this.setState({config}))
            .catch(error => this.setState({error: error.message}));
    }

    render() {
        if (this.state.error) {
            return <Message error>Could not load configuration: {this.state.error}</Message>
        } else if (this.state.config) {
            return <main>
                <HashRouter>
                    <Switch>
                        <Route path='/' render={() => <TestsPage tests={this.state.config.tests}/>}/>
                        <Route path='/test/:id' component={Test}/>
                    </Switch>
                </HashRouter>
            </main>
        } else {
            return <div>Loading...</div>
        }
    }
}

export default WebassemblyTestApp;

import React, {Component} from 'react';
import './WebassemblyTestApp.css';
import {HashRouter, Route, Switch} from "react-router-dom";
import TestsPage from "./TestsPage";
import Test from "./Test";
import {Message} from "semantic-ui-react";
import Wasm from "../lib/Wasm";
import config from "../lib/Config";

class WebassemblyTestApp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            error: false
        };
    }

    componentDidMount() {
        Promise.all([
            import("webassembly-tests-rust")
        ])
            .then(wasm => {
                Wasm["rust"] = wasm[0];
                this.setState({loading: false});
            })
            .catch(error => this.setState({error: error.message}));
    }

    render() {
        if (this.state.error) {
            return <Message error>Could not load configuration: {this.state.error}</Message>
        } else if (!this.state.loading) {
            return <main>
                <HashRouter>
                    <Switch>
                        <Route path='/' render={() => <TestsPage tests={config.tests}/>}/>
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

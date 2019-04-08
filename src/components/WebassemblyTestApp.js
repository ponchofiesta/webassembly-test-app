import React, {Component} from 'react';
import {HashRouter, Route, Switch} from "react-router-dom";
import TestsPage from "./TestsPage";
import Test from "./Test";
import {Message} from "semantic-ui-react";
import {loadConfig} from "../lib/Config";

class WebassemblyTestApp extends Component {

    constructor(props) {
        super(props);
        window.wasm = {};
        this.state = {
            loading: true,
            error: false
        };
    }

    componentDidMount() {
        const go = new window.Go();

        Promise.all([
            import("webassembly-tests-rust"),
            WebAssembly.instantiateStreaming(fetch('go/webassembly-tests-go.wasm'), go.importObject),
            loadConfig()
        ])
            .then(module => {
                window.wasm.rust = module[0];
                go.run(module[1].instance);
                window.config = module[2];
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
                        <Route path='/' render={() => <TestsPage tests={window.config.tests}/>}/>
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

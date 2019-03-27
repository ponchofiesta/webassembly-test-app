import React, {Component} from 'react';
import './WebassemblyTestApp.css';
import {HashRouter, Route, Switch} from "react-router-dom";
import TestsPage from "./TestsPage";
import Test from "./Test";
import {Message} from "semantic-ui-react";

class Wasms {

    static instance;

    constructor() {
        if(Wasms.instance){
            return Wasms.instance;
        }
        this.wasms = {
            rust: false
        };
    }

    async load() {
        let imports = {
            rust: import("webassembly-tests-rust")
        };
        let promises = [];
        this.wasms.forEach(name => {
            console.debug(`Loading WASM module ${name}...`);
            promises = Object.keys(imports).map(imp => imp
                .then(wasm => {
                    this.wasms[name] = wasm;
                    return !Object.keys(this.wasms)
                        .some(name => (this.wasms[name] === false));
                })
                .catch(error => this.setState({error: error.message}))
            );
        });
        return Promise.all([]);
    }
}

const loadConfig = () => fetch('config.json')
    .then(response => {
        if (response.ok) {
            return response.json();
        }
        throw new Error(response.statusText);
    });

const loadWasm = () => {
    let wasms = {
        rust: false
    };
    let imports = {
        rust: import("webassembly-tests-rust")
    };
    wasms.forEach(name => {
        console.debug(`Loading WASM module ${name}...`);
        Object.keys(imports).forEach(imp => imp
            .then(wasm => {
                wasms[name] = wasm;
                if (!Object.keys(wasms).some(name => (wasms[name] === false))) {
                    return wasms;
                }
            })
            .catch(error => this.setState({error: error.message}))
        );
    });
    return Promise.all(imports);
};


class WebassemblyTestApp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: false,
            config: null,
            wasms: {}
        };
    }

    componentDidMount() {
        loadConfig()
            .then(config => {
                let wasms = this.state.wasms;
                let imports = {
                    rust: import("webassembly-tests-rust")
                };
                config.wasm.forEach(name => {
                    console.debug(`Loading WASM module ${name}...`);
                    Object.keys(imports).forEach(imp => {
                        imp
                            .then(wasm => {
                                wasms[name] = wasm;
                                if (!Object.keys(wasms).some(name => (wasms[name] === false))) {
                                    this.setState({config, wasms});
                                }
                            })
                            .catch(error => this.setState({error: error.message}));
                    });
                });
            })
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

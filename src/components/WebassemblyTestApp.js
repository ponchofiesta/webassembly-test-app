import React, {Component} from 'react';
import {HashRouter, Route, Switch} from "react-router-dom";
import BenchmarksPage from "./BenchmarksPage";
import Benchmark from "./Benchmark";
import {Message} from "semantic-ui-react";
import config from "../lib/config";

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
            import("webassembly-benchmarks-rust"),
            WebAssembly.instantiateStreaming(fetch('go/webassembly-benchmarks-go.wasm'), {
                ...go.importObject
            }),
        ])
            .then(module => {
                window.wasm.rust = module[0];
                go.run(module[1].instance);
                this.setState({loading: false});
            })
            .catch(error => this.setState({error: error.message}));
    }

    render() {
        if (this.state.error) {
            return <Message error>Could not start application: {this.state.error}</Message>
        } else if (!this.state.loading) {
            return <main>
                <HashRouter>
                    <Switch>
                        <Route path='/' render={() => <BenchmarksPage benchmarksets={config.benchmarksets}/>}/>
                    </Switch>
                </HashRouter>
            </main>
        } else {
            return <div>Loading...</div>
        }
    }
}

export default WebassemblyTestApp;

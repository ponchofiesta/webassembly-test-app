import React, {Component} from 'react';
import {HashRouter, Route, Switch} from "react-router-dom";
import BenchmarksPage from "./BenchmarksPage";
import Benchmark from "./Benchmark";
import {Message} from "semantic-ui-react";
import config from "../lib/Config";

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
        const memory = new WebAssembly.Memory({initial: 1024});

        Promise.all([
            import("webassembly-benchmarks-rust"),
            WebAssembly.instantiateStreaming(fetch('go/webassembly-benchmarks-go.wasm'), {
                env: {memory},
                ...go.importObject
            }),
            // memory C library from https://github.com/guybedford/wasm-stdlib-hack/blob/master/dist/memory.wasm
            // provides: abort, calloc, free, malloc, memcoy, memset, sbrk
            WebAssembly.instantiateStreaming(fetch("memory.wasm"), {
                env: {memory}
            })
        ])
            .then(module => {
                window.wasm.rust = module[0];
                go.run(module[1].instance);
                window.wasm.memHelper = {
                    memory,
                    ...module[2].instance.exports
                };
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
                        <Route path='/' render={() => <BenchmarksPage benchmarks={config.benchmarks}/>}/>
                        <Route path='/test/:id' component={Benchmark}/>
                    </Switch>
                </HashRouter>
            </main>
        } else {
            return <div>Loading...</div>
        }
    }
}

export default WebassemblyTestApp;

import React, { Component } from 'react';
import Async from 'react-async';

const loadTests = () => fetch('tests.json')
    .then(response => response.json());

class Tests extends Component {
    //
    // constructor(props) {
    //     super(props);
    //
    //     this.state = {
    //         data: null,
    //     };
    // }

    render() {
        return <div>
            <h1>Alle Tests</h1>
            <Async promiseFn={loadTests}>
                <Async.Loading>Loading...</Async.Loading>
                <Async.Resolved>
                    {data => (
                        <div>
                            <strong>Loaded some data:</strong>
                            <pre>{JSON.stringify(data, null, 2)}</pre>
                        </div>
                    )}
                </Async.Resolved>
                <Async.Rejected>
                    {error => `Something went wrong: ${error.message}`}
                </Async.Rejected>
            </Async>
        </div>
    }
}

export default Tests;

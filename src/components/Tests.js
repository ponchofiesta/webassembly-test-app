import React, { Component } from 'react';

class Tests extends Component {

    constructor(props) {
        super(props);

        this.state = {
            success: false,
            error: false,
            data: null,
        };
    }

    async componentDidMount() {
        try {
            this.setState({success: false, error: false, data: null});
            const response = await fetch('tests.json');
            if (!response.ok) {
                this.setState({error: response.statusText});
                return;
            }
            const data = await response.json();
            this.setState({success: true, data});
        } catch (error) {
            this.setState({error});
        }
    }

    render() {
        if (this.state.error) {
            return <div>Something went wrong: {this.state.error}</div>
        } else if (this.state.data) {
            return <div>
                <strong>Loaded some data:</strong>
                <pre>{JSON.stringify(this.state.data, null, 2)}</pre>
            </div>
        } else {
            return <div>Loading...</div>
        }
    }
}

export default Tests;

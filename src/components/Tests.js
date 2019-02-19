import React, { Component } from 'react';

class Tests extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: null,
        };
    }

    componentDidMount() {
        fetch('tests.json')
            .then(response => response.json())
            .then(data => this.setState({ data }));
    }

    render() {
        return <div>
            <h1>Alle Tests</h1>
            <ul>
                {
                    this.data.map(test => <li>{test.name}</li>)
                }
            </ul>
        </div>
    }
}

export default Tests;

import React, { Component } from 'react';
import {Button, Divider, Grid, Header, Icon, Search, Segment} from "semantic-ui-react";

class Runner extends Component {
    render() {
        return <Button>Run {this.props.name}</Button>
    }
}

export default Runner;

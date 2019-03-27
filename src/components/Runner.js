import React, {Component} from 'react';
import {Icon, List} from "semantic-ui-react";

class Runner extends Component {
    render() {
        return <div>
            <Icon name='play circle' />
            <List.Content>
                <List.Header>{this.props.name}</List.Header>
            </List.Content>
        </div>
    }
}

export default Runner;

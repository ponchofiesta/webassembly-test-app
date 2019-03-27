import React, {Component} from 'react';
import Runner from "./Runner";
import {Header, List, Segment} from 'semantic-ui-react'

class Test extends Component {

    render() {
        return <Segment clearing>

            <Header floated='left'>{this.props.name}</Header>
            <List floated='right' selection verticalAlign='middle'>
                {
                    this.props.runners.map(runner => <List.Item ><Runner {...runner}/></List.Item>)
                }
            </List>
        </Segment>
    }
}

export default Test;

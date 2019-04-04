import React, {Component} from 'react';
import {Header} from "semantic-ui-react";

class ResultChart extends Component {

    render() {
        if (this.props.options.xaxis.categories.length > 0 && this.props.series[0].data.length > 0) {
            return <div>
                <Header as="h3">Results</Header>
                <this.props.chart options={this.props.options} series={this.props.series} />
            </div>
        } else {
            return null;
        }
    }
}

export default ResultChart;

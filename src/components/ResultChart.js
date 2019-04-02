import React, {Component} from 'react';

class ResultChart extends Component {

    render() {
        if (this.props.chart) {
            return <div>
                <this.props.chart options={this.props.options} series={this.props.series} />
            </div>
        }
    }
}

export default ResultChart;

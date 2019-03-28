import React, {Component} from 'react';

class ResultChart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            chart: props.chart
        }
    }

    render() {
        return <div>
            {this.state.chart ? this.state.chart : null}
        </div>
    }
}

export default ResultChart;

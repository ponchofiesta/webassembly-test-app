import React from "react";
import Chart from "react-apexcharts";

class BarChart extends React.Component {

    render() {
        return <Chart options={this.props.options} series={this.props.series} type="bar" width="350" height="350" />
    }
}
export default BarChart;

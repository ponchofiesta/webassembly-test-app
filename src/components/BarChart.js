import React from "react";
import Chart from "react-apexcharts";

class BarChart extends React.Component {

    render() {
        return <Chart options={this.props.options} series={this.props.series} />
    }
}
export default BarChart;

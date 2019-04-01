import React from "react";
import Chart from "react-apexcharts";

class BarChart extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            options: {
                plotOptions: {
                    bar: {
                        horizontal: true,
                    }
                },
                dataLabels: {
                    enabled: false
                },
                xaxis: {
                    categories: [],
                }
            },
            series: [{
                data: []
            }],
        };
    }

    render() {
        let newState = {...this.props, ...this.state};
        return <Chart options={newState.options} series={newState.series} type="bar" width="350" height="350" />
    }
}
export default BarChart;

import FibonacciJS from "./tests/FibonacciJS";
import FibonacciRust from "./tests/FibonacciRust";
import Chart from "react-apexcharts";

const msFormatter = (value) => (value+" ms");

const config = {
    logos: {
        js: "logos/es-ecmascript-logo.svg",
        rust: "logos/rust-logo-blk.svg",
        go: "logos/Go-Logo_Aqua.svg"
    },
    tests: [
        {
            name: "Fibunacci sequence",
            description: "Some number algo",
            runners: [
                {
                    name: "Iterative 100k",
                    type: "js",
                    object: new FibonacciJS(),
                    parameters: {
                        n: 1000000000
                    }
                },
                {
                    name: "Iterative 100k",
                    type: "rust",
                    object: new FibonacciRust(),
                    parameters: {
                        n: 1000000000
                    }
                }
            ],
            chart: {
                component: Chart,
                options: {
                    chart: {
                        width: "100%",
                        height: "100",
                        type: "bar"
                    },
                    plotOptions: {
                        bar: {
                            horizontal: true
                        }
                    },
                    dataLabels: {
                        enabled: true,
                        formatter: msFormatter
                    },
                    xaxis: {
                        categories: []
                    },
                    legend: {
                        show: false
                    },
                    tooltip: {
                        y: {
                            formatter: msFormatter
                        }
                    }
                }
            }
        }
    ]
};

export default config;

import FibonacciJS from "./tests/FibonacciJS";
import BarChart from "../components/BarChart";
import FibonacciRust from "./tests/FibonacciRust";

const config = {
    tests: [
        {
            name: "fibunacci",
            description: "Some number algo",
            runners: [
                {
                    name: "JS 100k",
                    type: "js",
                    object: new FibonacciJS(),
                    parameters: {
                        n: 1000000000
                    }
                },
                {
                    name: "Rust 100k",
                    type: "js",
                    object: new FibonacciRust(),
                    parameters: {
                        n: 1000000000
                    }
                }
            ],
            chart: {
                component: BarChart,
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
                }
            }
        }
    ]
};

export default config;

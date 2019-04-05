import Chart from "react-apexcharts";
import FibonacciJS from "./tests/fibonacci/FibonacciJS";
import FibonacciRust from "./tests/fibonacci/FibonacciRust";
import FibonacciGo from "./tests/fibonacci/FibonacciGo";

const msFormatter = (value) => (value+" ms");

const barChartOptions = {
    chart: {
        width: "100%",
        height: 30,
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
};

const areaChartOptions = {
    chart: {
        width: "100%",
        height: 16,
        type: "line"
    },
    markers: {
        size: 7
    },
    dataLabels: {
        enabled: true
    },
    xaxis: {
        title: {
            text: "Iterations"
        },
        categories: []
    },
    yaxis: {
        title: {
            text: "Duration in ms"
        }
    },
    legend: {
        show: true
    },
    title: {
        text: 'Time taken to run the tests',
        align: 'left'
    },
    tooltip: {
        y: {
            formatter: msFormatter
        }
    }
};

const config = {
    players: {
        js: {
            logo: "logos/es-ecmascript-logo.svg",
            color: "rgb(248,220,61)"
        },
        rust: {
            logo: "logos/rust-logo-blk.svg",
            color: "black"
        },
        go: {
            logo: "logos/Go-Logo_Aqua.svg",
            color: "#2DBCAF"
        }
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
                        n: 100000000
                    }
                },
                {
                    name: "Iterative 100k",
                    type: "rust",
                    object: new FibonacciRust(),
                    parameters: {
                        n: 100000000
                    }
                },
                {
                    name: "Iterative 100k",
                    type: "go",
                    object: new FibonacciGo(),
                    parameters: {
                        n: 100000000
                    }
                }
            ],
            repeat: 5,
            chart: {
                component: Chart,
                options: areaChartOptions
            }
        }
    ]
};

export default config;

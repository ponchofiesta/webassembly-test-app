import Chart from "react-apexcharts";
import FibonacciJS from "./tests/fibonacci/FibonacciJS";
import FibonacciRust from "./tests/fibonacci/FibonacciRust";
import FibonacciGo from "./tests/fibonacci/FibonacciGo";
import HanoiJS from "./tests/hanoi/HanoiJS";
import HanoiRust from "./tests/hanoi/HanoiRust";
import HanoiGo from "./tests/hanoi/HanoiGo";
import SortJS from "./tests/sort/SortJS";
import SortRust from "./tests/sort/SortRust";

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
                    name: "Iterative 100m",
                    type: "js",
                    factory: () => new FibonacciJS()
                },
                {
                    name: "Iterative 100m",
                    type: "rust",
                    factory: () => new FibonacciRust()
                },
                {
                    name: "Iterative 100m",
                    type: "go",
                    factory: () => new FibonacciGo()
                }
            ],
            parameters: {
                n: 100000000
            },
            repeat: 5,
            chart: {
                component: Chart,
                options: areaChartOptions
            }
        },
        {
            name: "Towers of Hanoi",
            description: "Some number algo",
            runners: [
                {
                    name: "Recursive 20",
                    type: "js",
                    factory: () => new HanoiJS()
                },
                {
                    name: "Recursive 2",
                    type: "rust",
                    factory: () => new HanoiRust()
                },
                {
                    name: "Recursive 20",
                    type: "go",
                    factory: () => new HanoiGo()
                }
            ],
            parameters: {
                n: 2,
                from: "A",
                via: "B",
                to: "C"
            },
            repeat: 5,
            chart: {
                component: Chart,
                options: areaChartOptions
            }
        },
        {
            name: "Sort",
            description: "Sort a list of elements containing multiple fields",
            runners: [
                {
                    name: "Sort",
                    type: "js",
                    factory: () => new SortJS()
                },
                {
                    name: "Sort",
                    type: "rust",
                    factory: () => new SortRust()
                }/*,
                {
                    name: "Sort",
                    type: "go",
                    factory: () => new HanoiGo()
                }*/
            ],
            parameters: {
                dataPath: "data/users.json",
                dataRepeat: 500
            },
            repeat: 1,
            chart: {
                component: Chart,
                options: areaChartOptions
            }
        }
    ]
};

export default config;

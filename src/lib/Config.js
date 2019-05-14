import Chart from "react-apexcharts";
import FibonacciJS from "./benchmarks/fibonacci/FibonacciJS";
import FibonacciRust from "./benchmarks/fibonacci/FibonacciRust";
import FibonacciGo from "./benchmarks/fibonacci/FibonacciGo";
import HanoiJS from "./benchmarks/hanoi/HanoiJS";
import HanoiRust from "./benchmarks/hanoi/HanoiRust";
import HanoiGo from "./benchmarks/hanoi/HanoiGo";
import SortJS from "./benchmarks/sort/SortJS";
import SortRust from "./benchmarks/sort/SortRust";
import SortGo from "./benchmarks/sort/SortGo";
import SieveOfAtkinPrimeJS from "./benchmarks/prime/SieveOfAtkinPrimeJS";
import SieveOfAtkinPrimeRust from "./benchmarks/prime/SieveOfAtkinPrimeRust";
import SieveOfAtkinPrimeGo from "./benchmarks/prime/SieveOfAtkinPrimeGo";
import AesJS from "./benchmarks/aes/AesJS";
import AesRust from "./benchmarks/aes/AesRust";
import AesGo from "./benchmarks/aes/AesGo";
import DeflateJS from "./benchmarks/deflate/DeflateJS";
import DeflateRust from "./benchmarks/deflate/DeflateRust";
import DeflateGo from "./benchmarks/deflate/DeflateGo";
import ConvolveJS from "./benchmarks/convolve/ConvolveJS";
import ConvolveRust from "./benchmarks/convolve/ConvolveRust";
import ConvolveGo from "./benchmarks/convolve/ConvolveGo";

const roundFormatter = value => Math.round(value);
const msFormatter = value => roundFormatter(value) + " ms";

// const barChartOptions = {
//     chart: {
//         width: "100%",
//         height: 30,
//         type: "bar"
//     },
//     plotOptions: {
//         bar: {
//             horizontal: true
//         }
//     },
//     dataLabels: {
//         enabled: true,
//         formatter: msFormatter
//     },
//     xaxis: {
//         categories: []
//     },
//     legend: {
//         show: false
//     },
//     tooltip: {
//         y: {
//             formatter: msFormatter
//         }
//     }
// };

const areaChartOptions = {
    chart: {
        width: "100%",
        height: 16,
        type: "line",
        animations: {
            enabled: true,
            easing: 'easeinout',
            speed: 200,
            animateGradually: {
                enabled: true,
                delay: 0
            },
            dynamicAnimation: {
                enabled: true,
                speed: 200
            }
        }
    },
    markers: {
        size: 7
    },
    dataLabels: {
        enabled: true,
        formatter: roundFormatter
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
        },
        labels: {
            formatter: roundFormatter
        }
    },
    legend: {
        show: true
    },
    title: {
        text: 'Time taken to run the benchmarks',
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
    benchmarks: [
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
            parameters: [
                100000000
            ],
            repeat: 5,
            chart: {
                component: Chart,
                options: areaChartOptions
            },
            result: [],
            error: null
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
                    name: "Recursive 20",
                    type: "rust",
                    factory: () => new HanoiRust()
                },
                {
                    name: "Recursive 20",
                    type: "go",
                    factory: () => new HanoiGo()
                }
            ],
            parameters: [ 20, "A", "B", "C" ],
            repeat: 5,
            chart: {
                component: Chart,
                options: areaChartOptions
            },
            result: [],
            error: null
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
                },
                {
                    name: "Sort",
                    type: "go",
                    factory: () => new SortGo()
                }
            ],
            parameters: [],
            externalData: {
                type: "sort",
                path: "data/users.json",
                repeat: 100
            },
            repeat: 5,
            chart: {
                component: Chart,
                options: areaChartOptions
            },
            result: [],
            error: null
        },
        {
            name: "Prime numbers",
            description: "Sieve of Atkin",
            runners: [
                {
                    name: "Prime",
                    type: "js",
                    factory: () => new SieveOfAtkinPrimeJS()
                },
                {
                    name: "Prime",
                    type: "rust",
                    factory: () => new SieveOfAtkinPrimeRust()
                },
                {
                    name: "Prime",
                    type: "go",
                    factory: () => new SieveOfAtkinPrimeGo()
                }
            ],
            parameters: [3000000],
            repeat: 5,
            chart: {
                component: Chart,
                options: areaChartOptions
            },
            result: [],
            error: null
        },
        {
            name: "Encryption",
            description: "Encryption",
            runners: [
                {
                    name: "AES CBC",
                    type: "js",
                    factory: () => new AesJS()
                },
                {
                    name: "AES CBC",
                    type: "rust",
                    factory: () => new AesRust()
                },
                {
                    name: "AES CBC",
                    type: "go",
                    factory: () => new AesGo()
                }
            ],
            parameters: [
                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
                [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32]
            ],
            externalData: {
                type: "bytes",
                path: "data/random.txt",
                repeat: 100
            },
            repeat: 5,
            chart: {
                component: Chart,
                options: areaChartOptions
            },
            result: [],
            error: null
        },
        {
            name: "Compression Deflate",
            description: "Deflate",
            runners: [
                {
                    name: "Deflate",
                    type: "js",
                    factory: () => new DeflateJS()
                },
                {
                    name: "Deflate",
                    type: "rust",
                    factory: () => new DeflateRust()
                },
                {
                    name: "Deflate",
                    type: "go",
                    factory: () => new DeflateGo()
                }
            ],
            parameters: [],
            externalData: {
                type: "bytes",
                path: "data/random.txt",
                repeat: 500
            },
            repeat: 5,
            chart: {
                component: Chart,
                options: areaChartOptions
            },
            result: [],
            error: null
        },
        {
            name: "Convolution filter",
            description: "convolution filter",
            runners: [
                {
                    name: "convolve",
                    type: "js",
                    factory: () => new ConvolveJS()
                },
                {
                    name: "convolve",
                    type: "rust",
                    factory: () => new ConvolveRust()
                },
                {
                    name: "convolve",
                    type: "go",
                    factory: () => new ConvolveGo()
                }
            ],
            parameters: [],
            externalData: {
                type: "image",
                path: "data/icon-64x64.png",
                repeat: 1
            },
            repeat: 1,
            chart: {
                component: Chart,
                options: areaChartOptions
            },
            showCanvas: true,
            canvas: document.createElement("canvas"),
            result: [],
            error: null
        }
    ]
};

export default config;

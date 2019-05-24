import Chart from "react-apexcharts";
import FibonacciJS from "./benchmarks/fibonacci/FibonacciJS";
import HanoiJS from "./benchmarks/hanoi/HanoiJS";
import SortJS from "./benchmarks/sort/SortJS";
import SieveOfAtkinPrimeJS from "./benchmarks/prime/SieveOfAtkinPrimeJS";
import AesJS from "./benchmarks/aes/AesJS";
import DeflateJS from "./benchmarks/deflate/DeflateJS";
import ConvolveJS from "./benchmarks/convolve/ConvolveJS";
import ConvolveRust from "./benchmarks/convolve/ConvolveRust";
import ConvolveGo from "./benchmarks/convolve/ConvolveGo";
import DefaultBenchmark from "./benchmarks/DefaultBenchmark";

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
                    factory: () => new DefaultBenchmark(benchmark => window.wasm.rust.fibonacci(...benchmark.parameters))
                },
                {
                    name: "Iterative 100m",
                    type: "go",
                    factory: () => new DefaultBenchmark(benchmark => window.wasm.go.fibonacci(...benchmark.parameters))
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
                    factory: () => new DefaultBenchmark(benchmark => window.wasm.rust.hanoi(...benchmark.parameters))
                },
                {
                    name: "Recursive 20",
                    type: "go",
                    factory: () => new DefaultBenchmark(benchmark => window.wasm.go.hanoi(...benchmark.parameters))
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
                    factory: () => new DefaultBenchmark(benchmark => window.wasm.rust.sort(...benchmark.parameters))
                },
                {
                    name: "Sort",
                    type: "go",
                    factory: () => new DefaultBenchmark(benchmark => window.wasm.go.sort(...benchmark.parameters))
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
                    factory: () => new DefaultBenchmark(benchmark => window.wasm.rust.prime(...benchmark.parameters))
                },
                {
                    name: "Prime",
                    type: "go",
                    factory: () => new DefaultBenchmark(benchmark => window.wasm.go.prime(...benchmark.parameters))
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
                    factory: () => new DefaultBenchmark(() => window.wasm.rust.aes())
                },
                {
                    name: "AES CBC",
                    type: "go",
                    factory: () => new DefaultBenchmark(() => window.wasm.go.aes())
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
                    factory: () => new DefaultBenchmark(() => window.wasm.go.deflate())
                },
                {
                    name: "Deflate",
                    type: "go",
                    factory: () => new DefaultBenchmark(() => window.wasm.go.deflate())
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
                path: "data/photo.jpg",
                repeat: 1
            },
            repeat: 5,
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

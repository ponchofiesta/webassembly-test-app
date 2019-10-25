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
import IterateJS from "./benchmarks/iterate/IterateJS";
import StringsDynamicJS from "./benchmarks/strings/StringsDynamicJS";
import RepeatingDefaultBenchmark from "./benchmarks/RepeatingDefaultBenchmark";
import StringsStaticJS from "./benchmarks/strings/StringsStaticJS";
import SumJS from "./benchmarks/sum/SumJS";
import ConvolveVideoJS from "./benchmarks/convolve_video/ConvolveVideoJS";
import ConvolveVideoRust from "./benchmarks/convolve_video/ConvolveVideoRust";
import ConvolveVideoGo from "./benchmarks/convolve_video/ConvolveVideoGo";
import Sha256JS from "./benchmarks/sha/Sha256JS";
import ExifReaderJS from "./benchmarks/exif/ExifReaderJS";
import DomJS from "./benchmarks/dom/DomJS";
import Sha256CryptoJS from "./benchmarks/sha/Sha256CryptoJS";
import Sha512CryptoJS from "./benchmarks/sha/Sha512CryptoJS";
import Sha512JS from "./benchmarks/sha/Sha512JS";

const roundFormatter = value => Math.round(value);
const msFormatter = value => roundFormatter(value) + " ms";
const fpsFormatter = value => value.toFixed(1) + " fps";

const barChartOptions = {
    chart: {
        width: "100%",
        height: 64,
        type: "bar",
        animations: {
            enabled: false/*,
            easing: 'easeinout',
            speed: 200,
            animateGradually: {
                enabled: true,
                delay: 0
            },
            dynamicAnimation: {
                enabled: true,
                speed: 200
            }*/
        }
    },
    markers: {
        size: 7
    },
    dataLabels: {
        enabled: true,
        formatter: fpsFormatter
    },
    xaxis: {
        title: {
            text: "Iterations"
        },
        categories: []
    },
    yaxis: {
        title: {
            text: "Frames per second"
        },
        labels: {
            formatter: fpsFormatter
        }
    },
    legend: {
        show: true
    },
    title: {
        text: 'Frame rate',
        align: 'left'
    },
    tooltip: {
        y: {
            formatter: fpsFormatter
        }
    }
};

const areaChartOptions = {
    chart: {
        width: "100%",
        height: 16,
        type: "line",
        animations: {
            enabled: false/*,
            easing: 'easeinout',
            speed: 200,
            animateGradually: {
                enabled: true,
                delay: 0
            },
            dynamicAnimation: {
                enabled: true,
                speed: 200
            }*/
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
            color: "rgb(248,220,61)",
            type: "js"
        },
        rust: {
            logo: "logos/rust-logo-blk.svg",
            color: "black",
            type: "wasm"
        },
        go: {
            logo: "logos/Go-Logo_Aqua.svg",
            color: "#2DBCAF",
            type: "wasm"
        }
    },
    benchmarksets: [
        {
            name: "Iterate",
            description: "simple number iteration",
            benchmarks: [
                {
                    name: "Iterate 100m",
                    player: "js",
                    newInstance: () => new IterateJS()
                },
                {
                    name: "Iterate 100m",
                    player: "rust",
                    newInstance: () => new DefaultBenchmark(benchmark => window.wasm.rust.iterate(...benchmark.parameters))
                },
                {
                    name: "Iterate 100m",
                    player: "go",
                    newInstance: () => new DefaultBenchmark(benchmark => window.wasm.go.iterate(...benchmark.parameters))
                }
            ],
            parameters: [
                100000000
            ],
            repeat: 5,
            chart: areaChartOptions,
            result: [],
            error: null
        },
        {
            name: "Strings dynamic",
            description: "Search for substring in string",
            benchmarks: [
                {
                    name: "strings",
                    player: "js",
                    newInstance: () => new StringsDynamicJS()
                },
                {
                    name: "strings",
                    player: "rust",
                    newInstance: () => new RepeatingDefaultBenchmark(benchmark => window.wasm.rust.strings_dynamic(...benchmark.parameters))
                },
                {
                    name: "strings",
                    player: "go",
                    newInstance: () => new RepeatingDefaultBenchmark(benchmark => window.wasm.go.strings_dynamic(...benchmark.parameters))
                }
            ],
            parameters: [
                10000, "hello world", "world"
            ],
            repeat: 5,
            chart: areaChartOptions,
            result: [],
            error: null
        },
        {
            name: "Strings static",
            description: "Search for substring in string",
            benchmarks: [
                {
                    name: "strings",
                    player: "js",
                    newInstance: () => new StringsStaticJS()
                },
                {
                    name: "strings",
                    player: "rust",
                    newInstance: () => new DefaultBenchmark(benchmark => window.wasm.rust.strings_static(...benchmark.parameters))
                },
                {
                    name: "strings",
                    player: "go",
                    newInstance: () => new DefaultBenchmark(benchmark => window.wasm.go.strings_static(...benchmark.parameters))
                }
            ],
            parameters: [
                1000000
            ],
            repeat: 5,
            chart: areaChartOptions,
            result: [],
            error: null
        },
        {
            name: "Sum static",
            description: "",
            benchmarks: [
                {
                    name: "sum",
                    player: "js",
                    newInstance: () => new SumJS()
                },
                {
                    name: "sum",
                    player: "rust",
                    newInstance: () => new DefaultBenchmark(benchmark => window.wasm.rust.sum(...benchmark.parameters))
                },
                {
                    name: "sum",
                    player: "go",
                    newInstance: () => new DefaultBenchmark(benchmark => window.wasm.go.sum(...benchmark.parameters))
                }
            ],
            parameters: [
                1000000
            ],
            repeat: 5,
            chart: areaChartOptions,
            result: [],
            error: null
        },
        {
            name: "Fibonacci sequence",
            description: "Calculate the Fibonacci sequence for a given N",
            benchmarks: [
                {
                    name: "Iterative 100m",
                    player: "js",
                    newInstance: () => new FibonacciJS()
                },
                {
                    name: "Iterative 100m",
                    player: "rust",
                    newInstance: () => new DefaultBenchmark(benchmark => window.wasm.rust.fibonacci(...benchmark.parameters))
                },
                {
                    name: "Iterative 100m",
                    player: "go",
                    newInstance: () => new DefaultBenchmark(benchmark => window.wasm.go.fibonacci(...benchmark.parameters))
                }
            ],
            parameters: [
                100000000
            ],
            repeat: 5,
            chart: areaChartOptions,
            result: [],
            error: null
        },
        {
            name: "Towers of Hanoi",
            description: "Move all disks from one tower to another and return the used moves as string",
            benchmarks: [
                {
                    name: "Recursive 20",
                    player: "js",
                    newInstance: () => new HanoiJS()
                },
                {
                    name: "Recursive 20",
                    player: "rust",
                    newInstance: () => new DefaultBenchmark(benchmark => window.wasm.rust.hanoi(...benchmark.parameters))
                },
                {
                    name: "Recursive 20",
                    player: "go",
                    newInstance: () => new DefaultBenchmark(benchmark => window.wasm.go.hanoi(...benchmark.parameters))
                }
            ],
            parameters: [ 20, "A", "B", "C" ],
            repeat: 5,
            chart: areaChartOptions,
            result: [],
            error: null
        },
        {
            name: "Sort",
            description: "Sort a list of elements containing multiple fields",
            benchmarks: [
                {
                    name: "Sort",
                    player: "js",
                    newInstance: () => new SortJS()
                },
                {
                    name: "Sort",
                    player: "rust",
                    newInstance: () => new DefaultBenchmark(benchmark => window.wasm.rust.sort(...benchmark.parameters))
                },
                {
                    name: "Sort",
                    player: "go",
                    newInstance: () => new DefaultBenchmark(benchmark => window.wasm.go.sort(...benchmark.parameters))
                }
            ],
            parameters: [],
            externalData: {
                type: "sort",
                path: "data/users.json",
                repeat: 100
            },
            repeat: 5,
            chart: areaChartOptions,
            result: [],
            error: null
        },
        {
            name: "Prime numbers",
            description: "Find primae numbers by using Sieve of Atkin",
            benchmarks: [
                {
                    name: "Prime",
                    player: "js",
                    newInstance: () => new SieveOfAtkinPrimeJS()
                },
                {
                    name: "Prime",
                    player: "rust",
                    newInstance: () => new DefaultBenchmark(benchmark => window.wasm.rust.prime(...benchmark.parameters))
                },
                {
                    name: "Prime",
                    player: "go",
                    newInstance: () => new DefaultBenchmark(benchmark => window.wasm.go.prime(...benchmark.parameters))
                }
            ],
            parameters: [3000000],
            repeat: 5,
            chart: areaChartOptions,
            result: [],
            error: null
        },
        {
            name: "SHA256",
            description: "Calculate the SHA256 hash",
            benchmarks: [
                {
                    name: "sha256 Forge",
                    player: "js",
                    newInstance: () => new Sha256JS()
                },
                {
                    name: "sha256 Crypto API",
                    player: "js",
                    newInstance: () => new Sha256CryptoJS()
                },
                {
                    name: "sha256",
                    player: "rust",
                    newInstance: () => new DefaultBenchmark(() => window.wasm.rust.sha256())
                },
                {
                    name: "sha256",
                    player: "go",
                    newInstance: () => new DefaultBenchmark(() => window.wasm.go.sha256())
                }
            ],
            parameters: [],
            externalData: {
                type: "bytes",
                path: "data/random.txt",
                repeat: 100
                // path: "data/8bytes.bin",
                // repeat: 1
            },
            repeat: 5,
            chart: areaChartOptions,
            result: [],
            error: null
        },
        {
            name: "SHA512",
            description: "Calculate the SHA512 hash",
            benchmarks: [
                {
                    name: "sha512 Forge",
                    player: "js",
                    newInstance: () => new Sha512JS()
                },
                {
                    name: "sha512 Crypto API",
                    player: "js",
                    newInstance: () => new Sha512CryptoJS()
                },
                {
                    name: "sha512",
                    player: "rust",
                    newInstance: () => new DefaultBenchmark(() => window.wasm.rust.sha512())
                },
                {
                    name: "sha512",
                    player: "go",
                    newInstance: () => new DefaultBenchmark(() => window.wasm.go.sha512())
                }
            ],
            parameters: [],
            externalData: {
                type: "bytes",
                path: "data/random.txt",
                repeat: 100
            },
            repeat: 5,
            chart: areaChartOptions,
            result: [],
            error: null
        },
        {
            name: "Encryption",
            description: "Encrypt data using AES",
            benchmarks: [
                {
                    name: "AES CBC",
                    player: "js",
                    newInstance: () => new AesJS()
                },
                {
                    name: "AES CBC",
                    player: "rust",
                    newInstance: () => new DefaultBenchmark(() => window.wasm.rust.aes())
                },
                {
                    name: "AES CBC",
                    player: "go",
                    newInstance: () => new DefaultBenchmark(() => window.wasm.go.aes())
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
            chart: areaChartOptions,
            result: [],
            error: null
        },
        {
            name: "Compression",
            description: "Compress data using Deflate",
            benchmarks: [
                {
                    name: "Deflate",
                    player: "js",
                    newInstance: () => new DeflateJS()
                },
                {
                    name: "Deflate",
                    player: "rust",
                    newInstance: () => new DefaultBenchmark(() => window.wasm.go.deflate())
                },
                {
                    name: "Deflate",
                    player: "go",
                    newInstance: () => new DefaultBenchmark(() => window.wasm.go.deflate())
                }
            ],
            parameters: [],
            externalData: {
                type: "bytes",
                path: "data/random.txt",
                repeat: 500
            },
            repeat: 5,
            chart: areaChartOptions,
            result: [],
            error: null
        },
        {
            name: "EXIF Reader",
            description: "exif reader",
            benchmarks: [
                {
                    name: "exif",
                    player: "js",
                    newInstance: () => new ExifReaderJS()
                },
                {
                    name: "exif",
                    player: "rust",
                    newInstance: () => new DefaultBenchmark(() => window.wasm.rust.exif())
                }/*,
                {
                    name: "exif",
                    player: "go",
                    newInstance: () => new ExifReaderGo()
                }*/
            ],
            parameters: [],
            externalData: {
                type: "bytes",
                path: "data/exif.jpg",
                repeat: 1
            },
            repeat: 5,
            chart: areaChartOptions,
            showCanvas: true,
            canvas: null,
            result: [],
            error: null
        },
        {
            name: "Convolution filter",
            description: "Manipulate an image using a convolution filter",
            benchmarks: [
                {
                    name: "convolve",
                    player: "js",
                    newInstance: () => new ConvolveJS()
                },
                {
                    name: "convolve",
                    player: "rust",
                    newInstance: () => new ConvolveRust()
                },
                {
                    name: "convolve",
                    player: "go",
                    newInstance: () => new ConvolveGo()
                }
            ],
            parameters: [],
            externalData: {
                type: "image",
                path: "data/photo.jpg",
                repeat: 1
            },
            repeat: 5,
            chart: areaChartOptions,
            showCanvas: true,
            canvas: null,
            result: [],
            error: null
        },
        {
            name: "Video filter",
            description: "Manipulate a video using a convolution filter",
            benchmarks: [
                {
                    name: "convolve video",
                    player: "js",
                    newInstance: () => new ConvolveVideoJS()
                },
                {
                    name: "convolve video",
                    player: "rust",
                    newInstance: () => new ConvolveVideoRust()
                },
                {
                    name: "convolve video",
                    player: "go",
                    newInstance: () => new ConvolveVideoGo()
                }
            ],
            parameters: [],
            externalData: {
                type: "video",
                path: "data/flowers.mp4",
                repeat: 1
            },
            repeat: 1,
            chart: barChartOptions,
            showCanvas: true,
            canvas: null,
            video: null,
            result: [],
            error: null
        },
        {
            name: "DOM manipulation",
            description: "Create, add and remove nodes to the documents DOM tree",
            benchmarks: [
                {
                    name: "dom",
                    player: "js",
                    newInstance: () => new DomJS()
                },
                {
                    name: "dom",
                    player: "rust",
                    newInstance: () => new DefaultBenchmark(benchmark => window.wasm.rust.dom(...benchmark.parameters))
                },
                {
                    name: "dom",
                    player: "go",
                    newInstance: () => new DefaultBenchmark(benchmark => window.wasm.go.dom(...benchmark.parameters))
                }
            ],
            parameters: [5000],
            repeat: 5,
            chart: areaChartOptions,
            showCanvas: true,
            canvas: null,
            video: null,
            result: [],
            error: null
        }
    ]
};

export default config;

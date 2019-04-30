import React from 'react';

import { storiesOf } from '@storybook/react';

import 'semantic-ui-css/semantic.min.css'
import Benchmarks from "../components/Benchmarks";
import Benchmark from "../components/Benchmark";
import BenchmarksPage from "../components/BenchmarksPage";

const config = {
    "benchmarks": [
        {
            "name": "fibunacci",
            "runners": [
                {
                    "name": "javascript",
                    "type": "js",
                    "component": "lib/runners/fibunacci/javascript"
                },
                {
                    "name": "webassembly",
                    "type": "wasmgo",
                    "component": "lib/runners/fibunacci/webassemblygo"
                },
                {
                    "name": "webassembly",
                    "type": "wasmrust",
                    "component": "lib/runners/fibunacci/webassemblyrust"
                }
            ]
        },
        {
            "name": "aes",
            "runners": [
                {
                    "name": "javascript",
                    "type": "js",
                    "component": "lib/runners/fibunacci/javascript"
                },
                {
                    "name": "webassembly",
                    "type": "wasmgo",
                    "component": "lib/runners/fibunacci/webassemblygo"
                },
                {
                    "name": "webassembly",
                    "type": "wasmrust",
                    "component": "lib/runners/fibunacci/webassemblyrust"
                }
            ]
        }
    ]
};

storiesOf('Runner', module)
    .add('default', () => <Runner {...config.benchmarks[0].runners[0]}/>);

storiesOf('Benchmark', module)
    .add('default', () => <Benchmark {...config.benchmarks[0]}/>);

storiesOf('Benchmarks', module)
    .add('default', () => <Benchmarks tests={config.benchmarks}/>);

storiesOf('BenchmarksPage', module)
    .add('default', () => <BenchmarksPage tests={config.benchmarks}/>);


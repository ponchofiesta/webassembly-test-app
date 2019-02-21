import React from 'react';

import { storiesOf } from '@storybook/react';

import 'semantic-ui-css/semantic.min.css'
import Tests from "../components/Tests";
import Runner from "../components/Runner";
import Test from "../components/Test";
import TestsPage from "../components/TestsPage";

const config = {
    "tests": [
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
    .add('default', () => <Runner {...config.tests[0].runners[0]}/>);

storiesOf('Test', module)
    .add('default', () => <Test {...config.tests[0]}/>);

storiesOf('Tests', module)
    .add('default', () => <Tests tests={config.tests}/>);

storiesOf('TestsPage', module)
    .add('default', () => <TestsPage tests={config.tests}/>);


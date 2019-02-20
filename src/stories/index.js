import React from 'react';

import { storiesOf } from '@storybook/react';

import 'semantic-ui-css/semantic.min.css'
import Tests from "../components/Tests";
import Runner from "../components/Runner";
import Test from "../components/Test";

storiesOf('Runner', module)
    .add('default', () => <Runner/>);

storiesOf('Test', module)
    .add('default', () => <Test/>);

storiesOf('Tests', module)
    .add('default', () => <Tests/>);


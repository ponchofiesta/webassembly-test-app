/**
 * Override "Create React App" modules like Webpack and Babel
 */

import {injectBabelPlugin} from "react-app-rewired";

const path = require('path');

module.exports = function override(config, env) {

    // Add WASM support
    const wasmExtensionRegExp = /\.wasm$/;
    config.resolve.extensions.push('.wasm');
    config.module.rules.forEach(rule => {
        (rule.oneOf || []).forEach(oneOf => {
            if (oneOf.loader && oneOf.loader.indexOf('file-loader') >= 0) {
                // Make file-loader ignore WASM files
                oneOf.exclude.push(wasmExtensionRegExp);
            }
        });
    });

    // Add a dedicated loader for WASM
    config.module.rules.push({
        test: wasmExtensionRegExp,
        include: path.resolve(__dirname, 'src'),
        use: [{ loader: require.resolve('wasm-loader'), options: {} }]
    });

    // Add Babel plugin to support null-safe operator
    // TODO: Add Babel plugin to support null safe operator: https://www.npmjs.com/package/babel-plugin-transform-optional-chaining
    //config = injectBabelPlugin('transform-optional-chaining', config);

    return config;
};

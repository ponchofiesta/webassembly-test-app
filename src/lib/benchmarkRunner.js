import config from "./config";
import {mediaLoader} from "./mediaLoader";

const loadExternalData = async externalData => {

    let data = null;

    // Download external benchmark data for JS
    if (externalData) {
        let element;
        if (externalData.type === "image") {
            element = new Image();
        } else if (externalData.type === "video") {
            element = document.createElement("video");
        }
        if (["image", "video"].includes(externalData.type)) {
            data = await mediaLoader(externalData.path, element);
        } else if(externalData.type === "bytes") {
            let response = await fetch(externalData.path);
            let buffer = await response.arrayBuffer();
            data = new Uint8Array(buffer);
        } else {
            let response = await fetch(externalData.path);
            try {
                data = await response.clone().json();
            } catch (e) {
                data = await response.text();
            }
        }
        if (externalData && externalData.repeat > 1) {
            if (data instanceof Uint8Array) {
                let array = new Uint8Array(externalData.repeat * data.length);
                for (let i = 0; i < externalData.repeat; i++) {
                    array.set(data, i * data.length);
                }
                data = array;
            } else if (typeof data == "object") {
                data = Array(externalData.repeat)
                    .fill(data)
                    .flat();
            } else {
                data = String(data).repeat(externalData.repeat);
            }
        }
    }

    if (data !== null) {
        externalData.data = data;
    }
    return externalData;
};

const doExternalData = (externalData, benchmarks, what) => {
    if (externalData && ["bytes", "sort"].includes(externalData.type)) {
        Object.keys(config.players).forEach(playerName => {
            if (config.players[playerName].type === "wasm" && benchmarks.some(benchmark => benchmark.player === playerName)) {
                switch (what) {
                    case "prepare":
                        window.wasm[playerName].prepare_test_data(externalData.type, externalData.data);
                        break;
                    case "reset":
                        window.wasm[playerName].reset_test_data(externalData.type);
                        break;
                    case "clear":
                        window.wasm[playerName].clear_test_data(externalData.type);
                        break;
                    default:
                        break;
                }
            }
        });
    }
    if (externalData && what === "clear") {
        externalData.data = null;
    }
};

const prepareExternalData = (externalData, benchmarks) => doExternalData(externalData, benchmarks, "prepare");
const resetExternalData = (externalData, benchmarks) => doExternalData(externalData, benchmarks, "reset");
const clearExternalData = (externalData, benchmarks) => doExternalData(externalData, benchmarks, "clear");

const runBenchmarkset = async (benchmarkset, onLoad) => {

    await loadExternalData(benchmarkset.externalData);
    prepareExternalData(benchmarkset.externalData, benchmarkset.benchmarks);

    // Prepare statistics
    let categories = [];
    let series = [];
    let colors = [];

    for (let index = 0; index < benchmarkset.benchmarks.length; index++) {
        const benchmark = benchmarkset.benchmarks[index];
        colors.push(config.players[benchmark.player].color);
        for (let i = 0; i < benchmarkset.repeat; i++) {
            if (categories.length < benchmarkset.repeat) {
                categories.push(i + 1);
            }
            if (!series[index]) {
                series[index] = {
                    name: benchmark.player + ": " + benchmark.name,
                    data: []
                };
            }
        }
    }

    // Run all benchmarks
    for (let index = 0; index < benchmarkset.benchmarks.length; index++) {
        const benchmark = benchmarkset.benchmarks[index];
        for (let i = 0; i < benchmarkset.repeat; i++) {
            resetExternalData(benchmarkset.externalData, benchmarkset.benchmarks);
            let instance = benchmark.newInstance();
            instance.onLoad = onLoad;
            await instance.run(benchmarkset);
            series[index].data.push(instance.results());
        }
    }

    clearExternalData(benchmarkset.externalData, benchmarkset.benchmarks);

    return {categories, series, colors};
};

export {runBenchmarkset};

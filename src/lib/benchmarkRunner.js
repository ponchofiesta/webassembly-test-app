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

const prepareExternalData = (externalData, benchmarks) => {
    if (externalData && externalData.type === "bytes") {
        Object.keys(config.players).forEach(playerName => {
            if (config.players[playerName].type === "wasm" && benchmarks.some(benchmark => benchmark.player === playerName)) {
                window.wasm[playerName].prepare_test_data(externalData.type, externalData.data);
            }
        });
    }
};

const resetExternalData = (externalData, benchmarks) => {
    if (externalData && externalData.type === "bytes") {
        Object.keys(config.players).forEach(playerName => {
            if (config.players[playerName].type === "wasm" && benchmarks.some(benchmark => benchmark.player === playerName)) {
                window.wasm[playerName].reset_test_data(externalData.type);
            }
        });
    }
};

const removeExternalData = (externalData, benchmarks) => {
    if (externalData) {
        if (externalData.type === "bytes") {
            Object.keys(config.players).forEach(playerName => {
                if (config.players[playerName].type === "wasm" && benchmarks.some(benchmark => benchmark.player === playerName)) {
                    window.wasm[playerName].clear_test_data(externalData.type);
                }
            });
        }
        externalData.data = null;
    }
};

const runBenchmarkset = async (benchmarkset, onLoad) => {
    let categories = [];
    let series = [];
    let colors = [];

    await loadExternalData(benchmarkset.externalData);
    prepareExternalData(benchmarkset.externalData, benchmarkset.benchmarks);

    // Run all benchmarks
    for (let index = 0; index < benchmarkset.benchmarks.length; index++) {
        const benchmark = benchmarkset.benchmarks[index];
        colors.push(config.players[benchmark.player].color);
        for (let i = 0; i < benchmarkset.repeat; i++) {
            resetExternalData(benchmarkset.externalData, benchmarkset.benchmarks);
            let instance = benchmark.newInstance();
            instance.onLoad = onLoad;
            await instance.run(benchmarkset);
            //categories.push(benchmark.player + ": " + benchmark.name);
            if (categories.length < benchmarkset.repeat) {
                categories.push(i + 1);
            }
            if (!series[index]) {
                series[index] = {
                    //name: "Duration",
                    name: benchmark.player + ": " + benchmark.name,
                    data: []
                };
            }
            series[index].data.push(instance.results());
        }
    }

    removeExternalData(benchmarkset.externalData, benchmarkset.benchmarks);

    return {categories, series, colors};
};

export {runBenchmarkset};

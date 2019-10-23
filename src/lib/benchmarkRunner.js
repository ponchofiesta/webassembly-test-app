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

const prepareExternalData = (externalData, runners) => {

    // Push benchmark data to Go and Rust
    if (externalData && ["sort", "bytes"].includes(externalData.type)) {
        if (runners.some(runner => runner.type === "rust")) {
            window.wasm.rust.prepare_test_data(externalData.type, externalData.data);
        }
        if (runners.some(runner => runner.type === "go")) {
            window.wasm.go.prepare_test_data(externalData.type, externalData.data);
        }
    }
};

const runBenchmark = async (benchmark, onLoad) => {
    let categories = [];
    let series = [];
    let colors = [];

    await loadExternalData(benchmark.externalData);
    prepareExternalData(benchmark.externalData, benchmark.runners);

    // Run all benchmarks
    for (let index = 0; index < benchmark.runners.length; index++) {
        const runner = benchmark.runners[index];
        colors.push(config.players[runner.type].color);
        for (let i = 0; i < benchmark.repeat; i++) {
            if (benchmark.externalData && benchmark.externalData.type) {
                if (runner.type === "rust") {
                    window.wasm.rust.reset_test_data(benchmark.externalData.type);
                }
                if (runner.type === "go") {
                    window.wasm.go.reset_test_data(benchmark.externalData.type);
                }
            }
            let instance = runner.newInstance();
            instance.onLoad = onLoad;
            await instance.run(benchmark);
            //categories.push(runner.type + ": " + runner.name);
            if (categories.length < benchmark.repeat) {
                categories.push(i + 1);
            }
            if (!series[index]) {
                series[index] = {
                    //name: "Duration",
                    name: runner.type + ": " + runner.name,
                    data: []
                };
            }
            series[index].data.push(instance.results());
        }
    }

    //window.wasm.rust.clear_test_data(this.props.externalData.type);
    //window.wasm.go.clear_test_data(this.props.externalData.type);

    return {categories, series, colors};
};

export {runBenchmark};

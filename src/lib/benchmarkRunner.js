import config from "./Config";

const runBenchmark = async benchmark => {
    let categories = [];
    let series = [];
    let colors = [];
    let data = null;

    // Download external benchmark data for JS
    if (benchmark.externalData) {
        let response = await fetch(benchmark.externalData.path);
        try {
            data = await response.clone().json();
        } catch (e) {
            data = await response.text();
        }
        if (benchmark.externalData && benchmark.externalData.repeat > 1) {
            if (typeof data == "object") {
                data = Array(benchmark.externalData.repeat)
                    .fill(data)
                    .flat();
            } else {
                data = String(data).repeat(benchmark.externalData.repeat);
            }
        }
    }

    if (data !== null) {
        benchmark.externalData.data = data;
    }

    // Push benchmark data to Go and Rust
    if (benchmark.externalData && benchmark.externalData.type) {
        if (benchmark.runners.some(runner => runner.type === "rust")) {
            window.wasm.rust.prepare_test_data(benchmark.externalData.type, benchmark.externalData.data);
        }
        if (benchmark.runners.some(runner => runner.type === "go")) {
            window.wasm.go.prepare_test_data(benchmark.externalData.type, benchmark.externalData.data);
        }
    }

    // Run all benchmarks
    benchmark.runners.forEach((runner, index) => {
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
            let instance = runner.factory();
            instance.run(benchmark.parameters, benchmark.externalData);
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
    });

    //window.wasm.rust.clear_test_data(this.props.externalData.type);
    //window.wasm.go.clear_test_data(this.props.externalData.type);

    return {categories, series, colors};
};

export {runBenchmark};
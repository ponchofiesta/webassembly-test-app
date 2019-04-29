import config from "./Config";

const runTest = async test => {
    let categories = [];
    let series = [];
    let colors = [];
    let data = null;

    // Download external test data for JS
    if (test.externalData) {
        let response = await fetch(test.externalData.path);
        try {
            data = await response.clone().json();
        } catch (e) {
            data = await response.text();
        }
        if (test.externalData && test.externalData.repeat > 1) {
            if (typeof data == "object") {
                data = Array(test.externalData.repeat)
                    .fill(data)
                    .flat();
            } else {
                data = String(data).repeat(test.externalData.repeat);
            }
        }
    }

    if (data !== null) {
        test.externalData.data = data;
    }

    // Push test data to Go and Rust
    if (test.externalData && test.externalData.type) {
        if (test.runners.some(runner => runner.type === "rust")) {
            window.wasm.rust.prepare_test_data(test.externalData.type, test.externalData.data);
        }
        if (test.runners.some(runner => runner.type === "go")) {
            window.wasm.go.prepare_test_data(test.externalData.type, test.externalData.data);
        }
    }

    // Run all tests
    test.runners.forEach((runner, index) => {
        colors.push(config.players[runner.type].color);
        for (let i = 0; i < test.repeat; i++) {
            if (test.externalData && test.externalData.type) {
                if (runner.type === "rust") {
                    window.wasm.rust.reset_test_data(test.externalData.type);
                }
                if (runner.type === "go") {
                    window.wasm.go.reset_test_data(test.externalData.type);
                }
            }
            let instance = runner.factory();
            instance.run(test.parameters, test.externalData);
            //categories.push(runner.type + ": " + runner.name);
            if (categories.length < test.repeat) {
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

export {runTest};
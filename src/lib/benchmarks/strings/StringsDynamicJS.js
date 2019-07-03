import Benchmark from "../Benchmark";

class StringsDynamicJS extends Benchmark {

    strings_dynamic(a, b) {
        return a.includes(b);
    }

    run(benchmark) {
        console.debug("start " + this.constructor.name);
        super.start();
        let params = benchmark.parameters.slice(1);
        for (let i = 0; i < benchmark.parameters[0]; i++) {
            this.strings_dynamic(...params);
        }
        super.stop();
        console.debug("stop " + this.constructor.name);
    }
}
export default StringsDynamicJS;

import Benchmark from "./Benchmark";

class DefaultBenchmark extends Benchmark {

    method;

    constructor(method) {
        super();
        const type = typeof method;
        if (type !== "function") {
            throw new Error("method parameter must be a function, actually it is '" + type + "'.");
        }
        this.method = method;
    }

    run(benchmark) {
        console.debug("start " + this.constructor.name);

        super.start();
        this.method(benchmark);
        super.stop();

        console.debug("stop " + this.constructor.name);
    }
}

export default DefaultBenchmark;

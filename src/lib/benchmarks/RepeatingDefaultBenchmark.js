import DefaultBenchmark from "./DefaultBenchmark";

class RepeatingDefaultBenchmark extends DefaultBenchmark {

    constructor(method) {
        super(method);
    }

    run(benchmark) {
        console.debug("start " + this.constructor.name);

        super.start();
        let repeat = benchmark.parameters[0];
        let parameters = benchmark.parameters.slice(1);
        let newBenchmark = {...benchmark, parameters};
        for (let i = 0; i < repeat; i++) {
            this.method(newBenchmark);
        }
        super.stop();

        console.debug("stop " + this.constructor.name);
    }
}

export default RepeatingDefaultBenchmark;
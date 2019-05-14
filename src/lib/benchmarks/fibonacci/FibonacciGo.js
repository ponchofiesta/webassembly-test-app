import Benchmark from "../Benchmark";

class FibonacciGo extends Benchmark {

    run(benchmark) {
        console.debug("start " + this.constructor.name);
        super.start();
        window.wasm.go.fibonacci(...benchmark.parameters);
        super.stop();
        console.debug("stop " + this.constructor.name);
    }
}
export default FibonacciGo;

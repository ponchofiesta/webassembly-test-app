import Benchmark from "../Benchmark";

class FibonacciRust extends Benchmark {

    run(parameters) {
        console.debug("start " + this.constructor.name);
        super.start();
        window.wasm.rust.fibonacci(...parameters);
        super.stop();
        console.debug("stop " + this.constructor.name);
    }
}
export default FibonacciRust;

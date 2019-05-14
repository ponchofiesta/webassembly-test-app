import Benchmark from "../Benchmark";

class SieveOfAtkinPrimeGo extends Benchmark {

    run(benchmark) {
        console.debug("start " + this.constructor.name);
        this.start();
        window.wasm.go.prime(...benchmark.parameters);
        this.stop();
        console.debug("stop " + this.constructor.name);
    }
}
export default SieveOfAtkinPrimeGo;

import Benchmark from "../Benchmark";

class SieveOfAtkinPrimeGo extends Benchmark {

    run(parameters, externalData) {
        console.debug("start " + this.constructor.name);
        this.start();
        window.wasm.go.prime(...parameters);
        this.stop();
        console.debug("stop " + this.constructor.name);
    }
}
export default SieveOfAtkinPrimeGo;

import Benchmark from "../Benchmark";

class SieveOfAtkinPrimeRust extends Benchmark {

    run(parameters, externalData) {
        console.debug("start " + this.constructor.name);
        this.start();
        window.wasm.rust.prime(...parameters);
        this.stop();
        console.debug("stop " + this.constructor.name);
    }
}
export default SieveOfAtkinPrimeRust;

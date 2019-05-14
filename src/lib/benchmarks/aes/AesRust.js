import Benchmark from "../Benchmark";

class AesRust extends Benchmark {

    run(benchmark) {
        console.debug("start " + this.constructor.name);
        super.start();
        window.wasm.rust.aes();
        super.stop();
        console.debug("stop " + this.constructor.name);
    }
}
export default AesRust;

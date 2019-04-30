import Benchmark from "../Benchmark";

class DeflateRust extends Benchmark {

    run(parameters, externalData) {
        console.debug("start " + this.constructor.name);
        super.start();
        window.wasm.rust.deflate();
        super.stop();
        console.debug("stop " + this.constructor.name);
    }
}
export default DeflateRust;
import Benchmark from "../Benchmark";

class DeflateGo extends Benchmark {

    run(parameters, externalData) {
        console.debug("start " + this.constructor.name);
        super.start();
        window.wasm.go.deflate();
        super.stop();
        console.debug("stop " + this.constructor.name);
    }
}
export default DeflateGo;

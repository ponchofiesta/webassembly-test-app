import Benchmark from "../Benchmark";

class SortGo extends Benchmark {

    run(parameters, externalData) {
        console.debug("start " + this.constructor.name);
        super.start();
        window.wasm.go.sort(...parameters);
        super.stop();
        console.debug("stop " + this.constructor.name);
    }
}
export default SortGo;

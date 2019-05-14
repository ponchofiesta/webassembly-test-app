import Benchmark from "../Benchmark";

class AesGo extends Benchmark {

    run() {
        console.debug("start " + this.constructor.name);
        super.start();
        window.wasm.go.aes();
        super.stop();
        console.debug("stop " + this.constructor.name);
    }
}
export default AesGo;

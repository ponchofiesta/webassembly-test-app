import Benchmark from "../Benchmark";
import pako from "pako";

class DeflateJS extends Benchmark {

    deflate(data) {
        return pako.deflate(data, {raw: true});
    }

    run(benchmark) {
        console.debug("start " + this.constructor.name);
        super.start();
        this.deflate(benchmark.externalData.data);
        super.stop();
        console.debug("stop " + this.constructor.name);
    }
}
export default DeflateJS;

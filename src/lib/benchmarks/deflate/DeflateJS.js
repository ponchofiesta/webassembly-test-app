import Benchmark from "../Benchmark";
import pako from "pako";
import * as aesjs from "aes-js";

class DeflateJS extends Benchmark {

    deflate(data) {
        return pako.deflate(data, {raw: true});
    }

    run(benchmark) {
        console.debug("start " + this.constructor.name);
        let dataBytes = aesjs.utils.utf8.toBytes(benchmark.externalData.data);
        super.start();
        this.deflate(dataBytes);
        super.stop();
        console.debug("stop " + this.constructor.name);
    }
}
export default DeflateJS;

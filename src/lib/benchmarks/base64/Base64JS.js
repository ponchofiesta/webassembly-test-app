import Benchmark from "../Benchmark";
import base64js from "base64-js";

class Base64JS extends Benchmark {

    run(benchmark) {
        console.debug("start " + this.constructor.name);
        super.start();
        base64js.fromByteArray(benchmark.externalData.data);
        super.stop();
        console.debug("stop " + this.constructor.name);
    }
}
export default Base64JS;

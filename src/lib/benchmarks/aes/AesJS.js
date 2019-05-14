import Benchmark from "../Benchmark";
import * as aesjs from "aes-js";

class AesJS extends Benchmark {

    aes_encrypt(key, iv, data) {
        let aesCtr = new aesjs.ModeOfOperation.cbc(key, iv);
        return aesCtr.encrypt(data);
    }

    aes_decrypt(key, iv, data) {
        let aesCtr = new aesjs.ModeOfOperation.cbc(key, iv);
        return aesCtr.decrypt(data);
    }

    run(benchmark) {
        console.debug("start " + this.constructor.name);
        // deep copy whole array
        let dataBytes = aesjs.utils.utf8.toBytes(benchmark.externalData.data);
        super.start();
        this.aes_encrypt(...benchmark.parameters, dataBytes);
        super.stop();
        console.debug("stop " + this.constructor.name);
    }
}
export default AesJS;

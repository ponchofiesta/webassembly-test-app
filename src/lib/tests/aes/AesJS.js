import Test from "../Test";
import * as aesjs from "aes-js";

class AesJS extends Test {

    aes(key, iv, data) {
        let aesCtr = new aesjs.ModeOfOperation.cbc(key, iv);
        return aesCtr.encrypt(data);
    }

    run(parameters, externalData) {
        console.debug("start " + this.constructor.name);
        // deep copy whole array
        let data = JSON.stringify(externalData.data);
        let dataBytes = aesjs.utils.utf8.toBytes(data);
        super.start();
        this.aes(...parameters, dataBytes);
        super.stop();
        console.debug("stop " + this.constructor.name);
    }
}
export default AesJS;

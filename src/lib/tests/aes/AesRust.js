import Test from "../Test";

class AesRust extends Test {

    run(parameters, externalData) {
        console.debug("start " + this.constructor.name);
        super.start();
        window.wasm.rust.aes();
        super.stop();
        console.debug("stop " + this.constructor.name);
    }
}
export default AesRust;

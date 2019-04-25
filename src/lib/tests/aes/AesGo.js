import Test from "../Test";

class AesGo extends Test {

    run(parameters, externalData) {
        console.debug("start " + this.constructor.name);
        super.start();
        window.wasm.go.aes();
        super.stop();
        console.debug("stop " + this.constructor.name);
    }
}
export default AesGo;

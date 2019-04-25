import Test from "../Test";

class DeflateRust extends Test {

    run(parameters, externalData) {
        console.debug("start " + this.constructor.name);
        super.start();
        window.wasm.rust.deflate();
        super.stop();
        console.debug("stop " + this.constructor.name);
    }
}
export default DeflateRust;

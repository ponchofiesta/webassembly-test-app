import Test from "../Test";

class SortRust extends Test {

    run(parameters, externalData) {
        console.debug("start " + this.constructor.name);
        super.start();
        window.wasm.rust.sort(...parameters);
        super.stop();
        console.debug("stop " + this.constructor.name);
    }
}
export default SortRust;

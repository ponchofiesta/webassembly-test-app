import Test from "../Test";

class SortRust extends Test {

    run(parameters) {
        console.debug("start " + this.constructor.name);
        super.start();
        window.wasm.rust.sort(parameters.dataPath);
        super.stop();
        console.debug("stop " + this.constructor.name);
    }
}
export default SortRust;

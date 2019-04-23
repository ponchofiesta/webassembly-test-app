import Test from "../Test";

class SortGo extends Test {

    run(parameters, externalData) {
        console.debug("start " + this.constructor.name);
        super.start();
        window.wasm.go.sort(...parameters);
        super.stop();
        console.debug("stop " + this.constructor.name);
    }
}
export default SortGo;

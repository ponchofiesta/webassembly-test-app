import Test from "../Test";

class HanoiRust extends Test {

    run(parameters) {
        console.debug("start " + this.constructor.name);
        super.start();
        window.wasm.rust.hanoi(parameters.n, 1, 2, 3);
        super.stop();
        console.debug("stop " + this.constructor.name);
    }
}
export default HanoiRust;

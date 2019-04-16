import Test from "../Test";

class HanoiGo extends Test {

    run(parameters) {
        console.debug("start " + this.constructor.name);
        super.start();
        window.wasm.go.hanoi(...parameters);
        super.stop();
        console.debug("stop " + this.constructor.name);
    }
}
export default HanoiGo;
import Test from "../Test";

class FibonacciGo extends Test {

    run(parameters) {
        console.debug("start " + this.constructor.name);
        super.start();
        window.wasm.go.fibonacci(...parameters);
        super.stop();
        console.debug("stop " + this.constructor.name);
    }
}
export default FibonacciGo;

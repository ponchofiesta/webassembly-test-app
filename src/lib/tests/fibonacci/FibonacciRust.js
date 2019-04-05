import Test from "../Test";

class FibonacciRust extends Test {

    run(parameters) {
        super.start();
        window.wasm.rust.fibonacci(parameters.n);
        super.stop();
    }
}
export default FibonacciRust;

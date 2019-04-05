import Test from "../Test";

class FibonacciGo extends Test {

    run(parameters) {
        super.start();
        window.wasm.go.fibonacci(parameters.n);
        super.stop();
    }
}
export default FibonacciGo;

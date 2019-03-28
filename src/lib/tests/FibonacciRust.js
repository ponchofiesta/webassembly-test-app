import Test from "./Test";
import Wasm from "../../lib/Wasm";

class FibonacciRust extends Test {

    run(parameters) {
        super.start();
        Wasm.rust.fibonacci(parameters.n);
        super.stop();
    }
}
export default FibonacciRust;

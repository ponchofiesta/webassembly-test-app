import Test from "./Test";

class FibonacciJS extends Test {

    fibonacci(n) {
        return n < 2 ? n : this.fibonacci(n - 1) + this.fibonacci(n - 2);
    }

    run(parameters) {
        super.start();
        this.fibonacci(parameters.n);
        super.stop();
    }
}
export default FibonacciJS;

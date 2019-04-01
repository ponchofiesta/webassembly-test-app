import Test from "./Test";

class FibonacciJS extends Test {

    fibonacci(n) {
        let a = 0
        let b = 1
        let t;
        while (n-- > 0) {
            t = a;
            a = b;
            b += t;
        }
        return a;
    }

    run(parameters) {
        console.debug("start fibonacci");
        super.start();
        this.fibonacci(parameters.n);
        super.stop();
        console.debug("stop fibonacci");
    }
}
export default FibonacciJS;

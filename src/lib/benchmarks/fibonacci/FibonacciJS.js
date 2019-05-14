import Benchmark from "../Benchmark";

class FibonacciJS extends Benchmark {

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

    run(benchmark) {
        console.debug("start " + this.constructor.name);
        super.start();
        this.fibonacci(...benchmark.parameters);
        super.stop();
        console.debug("stop " + this.constructor.name);
    }
}
export default FibonacciJS;

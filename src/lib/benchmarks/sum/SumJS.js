import Benchmark from "../Benchmark";

class SumJS extends Benchmark {

    sum(numbers) {
        return numbers.reduce((x, y) => x + y, 0);
    }

    run(benchmark) {
        console.debug("start " + this.constructor.name);
        super.start();
        for (let i = 0; i < benchmark.parameters[0]; i++) {
            this.sum([1, 2, 3, 4, 5, 6, 7, 8, 9]);
        }
        super.stop();
        console.debug("stop " + this.constructor.name);
    }
}
export default SumJS;

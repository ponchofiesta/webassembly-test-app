import Benchmark from "../Benchmark";

class IterateJS extends Benchmark {

    iterate(max) {
        let res = 0;
        for (let i = 0; i < max; ++i) {
            res++;
        }
        return res;
    }

    run(benchmark) {
        console.debug("start " + this.constructor.name);
        super.start();
        this.iterate(...benchmark.parameters);
        super.stop();
        console.debug("stop " + this.constructor.name);
    }
}
export default IterateJS;

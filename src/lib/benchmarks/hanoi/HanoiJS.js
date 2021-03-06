import Benchmark from "../Benchmark";

class HanoiJS extends Benchmark {

    constructor() {
        super();
        this.moves = "";
    }

    hanoi(n, from, via, to) {
        if (n > 0) {
            this.hanoi(n - 1, from, to, via);
            this.moves += from + "->" + to + "\n";
            this.hanoi(n - 1, via, from, to);
        }
        return this.moves;
    }

    run(benchmark) {
        console.debug("start " + this.constructor.name);
        super.start();
        this.hanoi(...benchmark.parameters);
        super.stop();
        console.debug("stop " + this.constructor.name);
    }
}
export default HanoiJS;

import Benchmark from "../Benchmark";

class HanoiGo extends Benchmark {

    run(benchmark) {
        console.debug("start " + this.constructor.name);
        super.start();
        window.wasm.go.hanoi(...benchmark.parameters);
        super.stop();
        console.debug("stop " + this.constructor.name);
    }
}
export default HanoiGo;

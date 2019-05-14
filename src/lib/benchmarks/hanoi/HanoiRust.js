import Benchmark from "../Benchmark";

class HanoiRust extends Benchmark {

    run(benchmark) {
        console.debug("start " + this.constructor.name);
        super.start();
        window.wasm.rust.hanoi(...benchmark.parameters);
        super.stop();
        console.debug("stop " + this.constructor.name);
    }
}
export default HanoiRust;

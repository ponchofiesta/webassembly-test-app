import Benchmark from "../Benchmark";

class ConvolveGo extends Benchmark {


    run(benchmark) {
        console.debug("start " + this.constructor.name);

        // draw image on canvas
        const canvas = this.createCanvas(benchmark.externalData.data);

        super.start();
        window.wasm.go.convolve(canvas);
        super.stop();

        this.updateCanvas(benchmark.canvas, canvas);

        console.debug("stop " + this.constructor.name);
    }
}
export default ConvolveGo;

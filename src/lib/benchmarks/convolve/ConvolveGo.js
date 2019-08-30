import Benchmark from "../Benchmark";

class ConvolveGo extends Benchmark {


    run(benchmark) {
        console.debug("start " + this.constructor.name);

        // draw image on canvas
        const canvas = this.createCanvas(benchmark.externalData.data);

        super.start();

        const context = canvas.getContext("2d");
        const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
        imageData.data.set(window.wasm.go.convolve_mem(imageData.data, canvas.width, canvas.height));
        context.putImageData(imageData, 0, 0);

        super.stop();

        this.updateCanvas(benchmark.canvas, canvas);

        console.debug("stop " + this.constructor.name);
    }
}
export default ConvolveGo;

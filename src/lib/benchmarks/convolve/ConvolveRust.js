import Benchmark from "../Benchmark";

class ConvolveRust extends Benchmark {


    run(benchmark) {
        console.debug("start " + this.constructor.name);

        // draw image on canvas
        const canvas = this.createCanvas(benchmark.externalData.data);

        super.start();
        window.wasm.rust.convolve(canvas);
        super.stop();

        const data = canvas.getContext("2d").getImageData(0, 0, canvas.width, canvas.height);
        //console.log(data.data[0] + ' ' + data.data[1] + ' ' + data.data[2]);

        // draw result on canvas
        this.updateCanvas(benchmark.canvas, canvas);

        console.debug("stop " + this.constructor.name);
    }
}
export default ConvolveRust;

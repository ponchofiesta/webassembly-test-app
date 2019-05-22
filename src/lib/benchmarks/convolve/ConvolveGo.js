import Benchmark from "../Benchmark";

class ConvolveGo extends Benchmark {


    run(benchmark) {
        console.debug("start " + this.constructor.name);

        // draw image on canvas
        const canvas = this.createCanvas(benchmark.externalData.data);

        super.start();

        const context = canvas.getContext("2d");
        const size = canvas.width * canvas.height * 4;
        const ptr = window.wasm.go.malloc(size);
        const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
        const dataGo = new Uint8ClampedArray(window.wasm.goMem.buffer, ptr, size);
        const imageDataGo = new ImageData(dataGo, canvas.width, canvas.height);
        imageDataGo.data.set(imageData.data);
        window.wasm.go.convolve_mem(ptr, canvas.width, canvas.height);
        context.putImageData(imageDataGo, 0, 0);

        super.stop();

        this.updateCanvas(benchmark.canvas, canvas);

        console.debug("stop " + this.constructor.name);
    }
}
export default ConvolveGo;

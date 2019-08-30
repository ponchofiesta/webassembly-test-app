import Benchmark from "../Benchmark";

class ConvolveGo extends Benchmark {

    async run(benchmark) {
        console.debug("start " + this.constructor.name);

        // draw image on canvas
        this.image = benchmark.externalData.data;
        this.canvas = document.createElement('canvas');
        this.canvas.width = this.image.width;
        this.canvas.height = this.image.height;
        const context = this.canvas.getContext('2d');
        context.drawImage(this.image, 0, 0);
        const imageData = context.getImageData(0, 0, this.canvas.width, this.canvas.height);

        await this.onLoad({
            ...benchmark,
            canvas: this.canvas
        });

        super.start();

        imageData.data.set(window.wasm.go.convolve_mem(imageData.data, this.canvas.width, this.canvas.height));
        context.putImageData(imageData, 0, 0);

        super.stop();

        console.debug("stop " + this.constructor.name);
    }
}
export default ConvolveGo;

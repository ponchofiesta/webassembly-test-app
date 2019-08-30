import Benchmark from "../Benchmark";

class ConvolveRust extends Benchmark {

    async run(benchmark) {
        console.debug("start " + this.constructor.name);

        // draw image on canvas
        this.image = benchmark.externalData.data;
        this.canvas = document.createElement('canvas');
        this.canvas.width = this.image.width;
        this.canvas.height = this.image.height;
        const context = this.canvas.getContext('2d');
        context.drawImage(this.image, 0, 0);

        await this.onLoad({
            ...benchmark,
            canvas: this.canvas
        });

        super.start();
        window.wasm.rust.convolve(this.canvas);
        super.stop();

        console.debug("stop " + this.constructor.name);
    }
}
export default ConvolveRust;

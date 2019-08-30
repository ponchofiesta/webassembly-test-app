import Benchmark from "./Benchmark";

class ImageBenchmark extends Benchmark {

    image = null;
    canvas = null;
    context = null;

    async run(benchmark) {
        console.debug("start " + this.constructor.name);

        // draw image on canvas
        this.image = benchmark.externalData.data;
        this.canvas = document.createElement('canvas');
        this.canvas.width = this.image.width;
        this.canvas.height = this.image.height;
        this.context = this.canvas.getContext('2d');
        this.context.drawImage(this.image, 0, 0);

        await this.onLoad({
            ...benchmark,
            canvas: this.canvas
        });

        super.start();
        this.onDraw();
        super.stop();

        console.debug("stop " + this.constructor.name);
    }
}
export default ImageBenchmark;

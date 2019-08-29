import Benchmark from "../Benchmark";
import VideoBenchmark from "../VideoBenchmark";

class ConvolveVideoRust extends VideoBenchmark {

    constructor() {
        super();
        super.onDraw = () => {
            let imageData = this.getVideoFrame();
            imageData.data.set(this.convolve(imageData.data, this.video.videoWidth, this.video.videoHeight));
            this.context.putImageData(imageData, 0, 0);
            this.frameCount++;
        };
    }

    convolve(data, width, height) {
        const outData = window.wasm.rust.convolve_video(data, this.video.videoWidth, this.video.videoHeight, 1/9, 6);
        return outData;
    }

    async run(benchmark) {
        console.debug("start " + this.constructor.name);

        this.video = benchmark.externalData.data;
        const canvas = document.createElement("canvas");
        canvas.width = this.video.videoWidth;
        canvas.height = this.video.videoHeight;
        this.canvas = canvas;
        this.context = canvas.getContext('2d');

        await this.onLoad({
            ...benchmark,
            video: benchmark.externalData.data,
            canvas: canvas
        });

        const promise = new Promise((resolve, reject) => {
            this.video.addEventListener("ended", () => {
                super.onEnd(resolve);
            }, false);
            this.video.addEventListener("error", () => {
                super.onEnd(reject);
            }, false);
        });

        super.start();

        this.video.play();
        this.renderVideo();

        return promise;
    }

}
export default ConvolveVideoRust;

import Benchmark from "./Benchmark";

class VideoBenchmark extends Benchmark {

    constructor() {
        super();
        this.canvas = null;
        this.context = null;
        this.video = null;
        this.frameCount = 0;
        this.onDraw = null;
    }

    onEnd(resolveOrReject) {
        super.stop();
        console.debug("stop " + this.constructor.name);
        resolveOrReject();
    }

    getVideoFrame() {
        const canvas = document.createElement('canvas');
        canvas.width = this.video.videoWidth;
        canvas.height =  this.video.videoHeight;
        const context = canvas.getContext('2d');
        context.drawImage(this.video, 0, 0, canvas.width, canvas.height);
        const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
        return imageData;
    }

    renderVideo() {
        this.onDraw();
        if (!this.video.paused) {
            requestAnimationFrame(this.renderVideo.bind(this));
        }
    }

    convolve(data, width, height, matrix, factor, count=1) {
        const side = matrix.length;
        const half = Math.floor(side / 2);
        for (let i = 0; i < count; i += 1) {
            for (let y = 1; y < height - 1; y += 1) {
                for (let x = 1; x < width - 1; x += 1) {
                    const index = (y * width + x) * 4;
                    let r = 0;
                    let g = 0;
                    let b = 0;
                    for (let cy = 0; cy < side; ++cy) {
                        for (let cx = 0; cx < side; ++cx) {
                            const cpx = ((y + (cy - half)) * width + (x + (cx - half))) * 4;
                            r += data[cpx] * matrix[cy][cx];
                            g += data[cpx + 1] * matrix[cy][cx];
                            b += data[cpx + 2] * matrix[cy][cx];
                        }
                    }

                    data[index] = factor * r;
                    data[index + 1] = factor * g;
                    data[index + 2] = factor * b;
                }
            }
        }
        return data;
    }

    async run(benchmark) {
        console.debug("start " + this.constructor.name);

        this.video = benchmark.externalData.data;
        this.video.style = "display: none;";
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
                this.onEnd(resolve);
            }, false);
            this.video.addEventListener("error", () => {
                this.onEnd(reject);
            }, false);
        });

        super.start();

        this.video.play();
        this.renderVideo();

        return promise;
    }

    results() {
        this.result = this.frameCount / (this.stopTime - this.startTime) * 1000;
        return this.result;
    }
}
export default VideoBenchmark;

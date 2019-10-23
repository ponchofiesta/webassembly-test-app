import Benchmark from "./Benchmark";

class VideoBenchmark extends Benchmark {

    canvas = null;
    context = null;
    video = null;
    frameCount = 0;
    onDraw = null;

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

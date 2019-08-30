import VideoBenchmark from "../VideoBenchmark";

class ConvolveVideoGo extends VideoBenchmark {

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
        data = window.wasm.go.convolve_video(data, this.canvas.width, this.canvas.height, 1/9, 6);
        return data;
    }
}
export default ConvolveVideoGo;

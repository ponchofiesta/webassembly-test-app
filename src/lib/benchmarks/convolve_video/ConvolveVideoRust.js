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
}
export default ConvolveVideoRust;

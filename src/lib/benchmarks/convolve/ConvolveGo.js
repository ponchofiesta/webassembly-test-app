import ImageBenchmark from "../ImageBenchmark";

class ConvolveGo extends ImageBenchmark {

    constructor() {
        super();
        this.onDraw = () => {
            const imageData = this.context.getImageData(0, 0, this.canvas.width, this.canvas.height);
            imageData.data.set(window.wasm.go.convolve_mem(imageData.data, this.canvas.width, this.canvas.height));
            this.context.putImageData(imageData, 0, 0);
        };
    }
}
export default ConvolveGo;

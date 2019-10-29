import ImageBenchmark from "../ImageBenchmark";

class ConvolveRust extends ImageBenchmark {

    constructor() {
        super();
        super.onDraw = () => {
            const imageData = this.context.getImageData(0, 0, this.canvas.width, this.canvas.height);
            imageData.data.set(window.wasm.rust.convolve_mem(imageData.data, this.canvas.width, this.canvas.height));
            this.context.putImageData(imageData, 0, 0);
        };
    }
}
export default ConvolveRust;

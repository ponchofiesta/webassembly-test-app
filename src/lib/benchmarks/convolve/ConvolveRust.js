import ImageBenchmark from "../ImageBenchmark";

class ConvolveRust extends ImageBenchmark {

    constructor() {
        super();
        super.onDraw = () => {
            window.wasm.rust.convolve(this.canvas);
        };
    }
}
export default ConvolveRust;

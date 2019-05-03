import Benchmark from "../Benchmark";

class ConvolveGo extends Benchmark {


    run(parameters, externalData) {
        console.debug("start " + this.constructor.name);

        // draw image on canvas
        const image = externalData.data;
        const canvas = document.createElement('canvas');
        canvas.width = image.width;
        canvas.height = image.height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(image, 0, 0);

        super.start();
        window.wasm.go.convolve(canvas);
        super.stop();
        console.debug("stop " + this.constructor.name);
    }
}
export default ConvolveGo;

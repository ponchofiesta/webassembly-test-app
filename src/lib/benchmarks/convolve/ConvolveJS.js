import Benchmark from "../Benchmark";
import * as convolveLib from "convolve";

class ConvolveJS extends Benchmark {

    convolve(canvas) {
        let blur = [
            [0, .2, 0],
            [.2, .2, .2],
            [0, .2, 0],
        ];
        convolveLib(blur)
            .canvas(canvas);
    }

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
        this.convolve(canvas);
        super.stop();
        console.debug("stop " + this.constructor.name);
    }
}
export default ConvolveJS;

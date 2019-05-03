import Benchmark from "../Benchmark";
import * as convolveLib from "convolve";

class ConvolveJS extends Benchmark {

    convolve(canvas) {
        let blur = [
            0.0, 0.2, 0.0,
            0.2, 0.2, 0.2,
            0.0, 0.2, 0.0
        ];
        // convolveLib(blur)
        //     .canvas(canvas);
        this.convoluteFilter(canvas, blur, 1);
    }

    convoluteFilter = (canvas, matrix, factor) => {
        const side = Math.round(Math.sqrt(matrix.length));
        const halfSide = Math.floor(side / 2);
        const context = canvas.getContext('2d');
        const source = context.getImageData(0, 0, canvas.width, canvas.height);
        const sourceData = source.data;
        const imageWidth = source.width;
        const imageHeight = source.height;
        const output = context.createImageData(imageWidth, imageHeight);
        const outputData = output.data;

        for (let y = 0; y < imageHeight; y++) {
            for (let x = 0; x < imageWidth; x++) {
                const outputIndex = (y * imageWidth + x) * 4;
                let r = 0.0;
                let g = 0.0;
                let b = 0.0;
                for (let cy = 0; cy < side; cy++) {
                    for (let cx = 0; cx < side; cx++) {
                        const scy = y + cy - halfSide;
                        const scx = x + cx - halfSide;
                        if (scy >= 0 && scy < imageHeight && scx >= 0 && scx < imageWidth) {
                            const sourceIndex = (scy * imageWidth + scx) * 4;
                            const modify = matrix[cy * side + cx];
                            r += sourceData[sourceIndex] * modify;
                            g += sourceData[sourceIndex + 1] * modify;
                            b += sourceData[sourceIndex + 2] * modify;
                        }
                    }
                }
                outputData[outputIndex] = r * factor;
                outputData[outputIndex + 1] = g * factor;
                outputData[outputIndex + 2] = b * factor;
                outputData[outputIndex + 3] = sourceData[outputIndex + 3];
            }
        }

        context.putImageData(output, 0, 0);
    };

    run(parameters, externalData) {
        console.debug("start " + this.constructor.name);

        // draw image on canvas
        const image = externalData.data;
        const canvas = document.createElement('canvas');
        canvas.width = image.width;
        canvas.height = image.height;
        const context = canvas.getContext('2d');
        context.drawImage(image, 0, 0);

        super.start();
        this.convolve(canvas);
        super.stop();
        console.debug("stop " + this.constructor.name);
    }
}
export default ConvolveJS;

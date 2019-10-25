import ImageBenchmark from "../ImageBenchmark";

class ConvolveJS extends ImageBenchmark {

    constructor() {
        super();
        super.onDraw = () => {
            this.convolve();
        };
    }

    convolve() {
        let blur = [
            0.0, 0.2, 0.0,
            0.2, 0.2, 0.2,
            0.0, 0.2, 0.0
        ];
        this.convoluteFilter(blur, 1);
    }

    convoluteFilter = (matrix, factor) => {
        const side = Math.round(Math.sqrt(matrix.length));
        const halfSide = Math.floor(side / 2);
        const source = this.context.getImageData(0, 0, this.canvas.width, this.canvas.height);
        const sourceData = source.data;
        const imageWidth = source.width;
        const imageHeight = source.height;
        const output = this.context.createImageData(imageWidth, imageHeight);
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

        this.context.putImageData(output, 0, 0);
    };
}
export default ConvolveJS;

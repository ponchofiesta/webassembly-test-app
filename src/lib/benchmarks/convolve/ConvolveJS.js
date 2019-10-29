import ImageBenchmark from "../ImageBenchmark";

class ConvolveJS extends ImageBenchmark {

    constructor() {
        super();
        super.onDraw = () => {
            const imageData = this.context.getImageData(0, 0, this.canvas.width, this.canvas.height);
            imageData.data.set(this.convolve(imageData.data, this.canvas.width, this.canvas.height));
            this.context.putImageData(imageData, 0, 0);
        };
    }

    convolve(data, width, height) {
        let blur = [
            0.0, 0.2, 0.0,
            0.2, 0.2, 0.2,
            0.0, 0.2, 0.0
        ];
        return this.convoluteFilter(data, width, height, blur, 1);
    }

    convoluteFilter = (data, width, height, matrix, factor) => {
        const side = Math.round(Math.sqrt(matrix.length));
        const halfSide = Math.floor(side / 2);
        const outputData = new Uint8ClampedArray(width * height * 4);

        for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
                const outputIndex = (y * width + x) * 4;
                let r = 0.0;
                let g = 0.0;
                let b = 0.0;
                for (let cy = 0; cy < side; cy++) {
                    for (let cx = 0; cx < side; cx++) {
                        const scy = y + cy - halfSide;
                        const scx = x + cx - halfSide;
                        if (scy >= 0 && scy < height && scx >= 0 && scx < width) {
                            const sourceIndex = (scy * width + scx) * 4;
                            const modify = matrix[cy * side + cx];
                            r += data[sourceIndex] * modify;
                            g += data[sourceIndex + 1] * modify;
                            b += data[sourceIndex + 2] * modify;
                        }
                    }
                }
                outputData[outputIndex] = r * factor;
                outputData[outputIndex + 1] = g * factor;
                outputData[outputIndex + 2] = b * factor;
                outputData[outputIndex + 3] = data[outputIndex + 3];
            }
        }
        return outputData;
    };
}
export default ConvolveJS;

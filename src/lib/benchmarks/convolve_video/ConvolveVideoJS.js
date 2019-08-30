import VideoBenchmark from "../VideoBenchmark";

class ConvolveVideoJS extends VideoBenchmark {

    constructor() {
        super();
        super.onDraw = () => {
            let imageData = this.getVideoFrame();
            imageData.data.set(this.convolve(imageData.data, this.video.videoWidth, this.video.videoHeight, [[1, 1, 1], [1, 1, 1], [1, 1, 1]],1/9,6));
            this.context.putImageData(imageData, 0, 0);
            this.frameCount++;
        };
    }

    convolve(data, width, height, matrix, factor, count=1) {
        const side = matrix.length;
        const half = Math.floor(side / 2);
        for (let i = 0; i < count; i += 1) {
            for (let y = 1; y < height - 1; y += 1) {
                for (let x = 1; x < width - 1; x += 1) {
                    const index = (y * width + x) * 4;
                    let r = 0;
                    let g = 0;
                    let b = 0;
                    for (let cy = 0; cy < side; ++cy) {
                        for (let cx = 0; cx < side; ++cx) {
                            const cpx = ((y + (cy - half)) * width + (x + (cx - half))) * 4;
                            r += data[cpx] * matrix[cy][cx];
                            g += data[cpx + 1] * matrix[cy][cx];
                            b += data[cpx + 2] * matrix[cy][cx];
                        }
                    }

                    data[index] = factor * r;
                    data[index + 1] = factor * g;
                    data[index + 2] = factor * b;
                }
            }
        }
        return data;
    }
}
export default ConvolveVideoJS;

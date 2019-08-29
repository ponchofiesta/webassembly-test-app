class Benchmark {

    constructor() {
        this.result = null;
        this.startTime = null;
        this.stopTime = null;
    }

    prepareTestData(url) {
        console.warn(this.constuctor.name + " not implemented.")
    }

    resetTestData(url) {
        console.warn(this.constuctor.name + " not implemented.")
    }

    run() {
        console.warn(this.constuctor.name + " not implemented.")
    }

    start() {
        this.startTime = performance.now();
    }

    stop() {
        this.stopTime = performance.now();
        this.result = this.stopTime - this.startTime;
    }

    results() {
        return this.result;
    }

    createCanvas(image) {
        const canvas = document.createElement('canvas');
        canvas.width = image.width;
        canvas.height = image.height;
        const context = canvas.getContext('2d');
        context.drawImage(image, 0, 0);
        return canvas;
    }

    updateCanvas(domCanvas, calcCanvas) {
        domCanvas.width = calcCanvas.width;
        domCanvas.height = calcCanvas.height;
        domCanvas.getContext("2d").putImageData(calcCanvas.getContext("2d").getImageData(0, 0, calcCanvas.width, calcCanvas.height), 0, 0);
    }



}
export default Benchmark;

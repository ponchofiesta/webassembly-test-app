class Benchmark {

    onLoad = () => {};

    constructor() {
        this.result = null;
        this.startTime = null;
        this.stopTime = null;
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
}
export default Benchmark;

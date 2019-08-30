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
}
export default Benchmark;

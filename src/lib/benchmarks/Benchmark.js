class Benchmark {

    startTime = null;
    stopTime = null;
    result = null;
    onLoad = () => {};

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

class Test {

    constructor() {
        this.result = null;
        this.startTime = null;
        this.stopTime = null;
    }

    run() {

    }

    start() {
        this.startTime = new Date();
    }

    stop() {
        this.stopTime = new Date();
        this.result = this.stopTime - this.startTime;
    }

    results() {
        return this.result;
    }
}
export default Test;

class Test {

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

class Test {

    constructor() {
        this.result = {
            time: null
        };
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
        this.result.time = this.stopTime - this.startTime;
    }

    results() {
        return this.result;
    }
}
export default Test;

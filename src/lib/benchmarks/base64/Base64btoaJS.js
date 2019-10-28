import Benchmark from "../Benchmark";

class Base64btoaJS extends Benchmark {

    run(benchmark) {
        console.debug("start " + this.constructor.name);
        let data = "";
        for (let i = 0; i < benchmark.externalData.data.length; i++) {
            data += String.fromCharCode(benchmark.externalData.data[i]);
        }
        super.start();
        let result = btoa(data);
        super.stop();
        console.debug("stop " + this.constructor.name);
    }
}
export default Base64btoaJS;

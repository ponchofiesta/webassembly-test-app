import Benchmark from "../Benchmark";
import forge from 'node-forge';

class Sha512JS extends Benchmark {

    sha512(input) {
        const md = forge.md.sha512.create();
        md.update(input);
        let hex = md.digest().toHex();
        return hex;
    }

    run(benchmark) {
        console.debug("start " + this.constructor.name);
        let data = "";
        benchmark.externalData.data.forEach(byte => data += String.fromCharCode(byte));
        this.start();
        this.sha512(benchmark.externalData.data);
        this.stop();
        console.debug("stop " + this.constructor.name);
    }
}
export default Sha512JS;

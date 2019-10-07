import Benchmark from "../Benchmark";
import forge from 'node-forge';

class Sha512JS extends Benchmark {

    sha512(input) {
        const md = forge.md.sha512.create();
        md.update(input);
        return md.digest().toHex();
    }

    run(benchmark) {
        console.debug("start " + this.constructor.name);
        this.start();
        this.sha512(benchmark.externalData.data);
        this.stop();
        console.debug("stop " + this.constructor.name);
    }
}
export default Sha512JS;

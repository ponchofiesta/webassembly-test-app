import Benchmark from "../Benchmark";
import forge from 'node-forge';

class Sha256JS extends Benchmark {

    sha256(input) {
        const md = forge.md.sha256.create();
        md.update(input);
        return md.digest().toHex();
    }

    run(benchmark) {
        console.debug("start " + this.constructor.name);
        this.start();
        this.sha256(benchmark.externalData.data);
        this.stop();
        console.debug("stop " + this.constructor.name);
    }
}
export default Sha256JS;

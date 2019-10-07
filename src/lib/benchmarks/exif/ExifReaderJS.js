import Benchmark from "../Benchmark";
import ExifReader from 'exifreader';

class ExifReaderJS extends Benchmark {

    async run(benchmark) {
        console.debug("start " + this.constructor.name);
        super.start();
        const tags = ExifReader.load(benchmark.externalData.data);
        super.stop();
        console.debug("stop " + this.constructor.name);
    }
}
export default ExifReaderJS;

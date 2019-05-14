import Benchmark from "../Benchmark";

class SortJS extends Benchmark {

    sort(data) {
        return data.sort((firstEl, secondEl) => {
            if (firstEl.name < secondEl.name) {
                return -1;
            } else if (firstEl.name > secondEl.name) {
                return 1;
            }
            return 0;
        });
    }

    run(benchmark) {
        console.debug("start " + this.constructor.name);
        // deep copy whole array
        let data = JSON.parse(JSON.stringify(benchmark.externalData.data));
        super.start();
        this.sort(data);
        super.stop();
        console.debug("stop " + this.constructor.name);
    }
}
export default SortJS;

import Test from "../Test";

class SortJS extends Test {

    sort(data) {

    }

    run(parameters) {
        console.debug("start " + this.constructor.name);
        super.start();
        this.sort(parameters.data);
        super.stop();
        console.debug("stop " + this.constructor.name);
    }
}
export default SortJS;

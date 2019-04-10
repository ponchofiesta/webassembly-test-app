import Test from "../Test";

class SortJS extends Test {

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

    run(parameters) {
        console.debug("start " + this.constructor.name);
        super.start();
        this.sort(...parameters);
        super.stop();
        console.debug("stop " + this.constructor.name);


    }
}
export default SortJS;

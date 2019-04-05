import Test from "../Test";

class HanoiJS extends Test {

    hanoi(n, from, to, via) {
        if (n > 0) {
            this.hanoi(n - 1, from, via, to);
            this.hanoi(n - 1, to, from, via);
        }
    }

    run(parameters) {
        console.debug("start " + this.constructor.name);
        super.start();
        this.hanoi(parameters.n, 1, 2, 3);
        super.stop();
        console.debug("stop " + this.constructor.name);
    }
}
export default HanoiJS;

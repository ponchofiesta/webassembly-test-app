import Test from "../Test";

class SieveOfAtkinPrimeRust extends Test {

    run(parameters, externalData) {
        console.debug("start " + this.constructor.name);
        this.start();
        window.wasm.rust.prime(...parameters);
        this.stop();
        console.debug("stop " + this.constructor.name);
    }
}
export default SieveOfAtkinPrimeRust;

import Benchmark from "../Benchmark";

class Sha256CryptoJS extends Benchmark {

    async sha256(input) {
        const digest = await crypto.subtle.digest('SHA-256', input);
        const array = Array.from(new Uint8Array(digest));
        const hex = array.map(byte => ('00' + byte.toString(16)).slice(-2)).join('');
        return hex;
    }

    async run(benchmark) {
        console.debug("start " + this.constructor.name);
        this.start();
        await this.sha256(benchmark.externalData.data.buffer);
        this.stop();
        console.debug("stop " + this.constructor.name);
    }
}
export default Sha256CryptoJS;

import Benchmark from "../Benchmark";

class SieveOfAtkinPrimeJS extends Benchmark {

    prime(max) {
        let primes = [];

        if (max > 2)
            primes.push(2);
        if (max > 3)
            primes.push(3);

        // Initialise the sieve array with false values
        let sieve = Array(max).fill(false);

        /* Mark siev[n] is true if one
           of the following is true:
        a) n = (4*x*x)+(y*y) has odd number of
           solutions, i.e., there exist
           odd number of distinct pairs (x, y)
           that satisfy the equation and
            n % 12 = 1 or n % 12 = 5.
        b) n = (3*x*x)+(y*y) has odd number of
           solutions and n % 12 = 7
        c) n = (3*x*x)-(y*y) has odd number of
           solutions, x > y and n % 12 = 11 */
        for (let x = 1; x * x < max; x++) {
            for (let y = 1; y * y < max; y++) {

                // Main part of Sieve of Atkin
                let n = (4 * x * x) + (y * y);
                if (n <= max && (n % 12 === 1 || n % 12 === 5))
                    sieve[n] ^= true;

                n = (3 * x * x) + (y * y);
                if (n <= max && n % 12 === 7)
                    sieve[n] ^= true;

                n = (3 * x * x) - (y * y);
                if (x > y && n <= max && n % 12 === 11)
                    sieve[n] ^= true;
            }
        }

        // Mark all multiples of squares as non-prime
        for (let r = 5; r * r < max; r++) {
            if (sieve[r]) {
                for (let i = r * r; i < max; i += r * r)
                    sieve[i] = false;
            }
        }

        // Print primes using sieve[]
        for (let a = 5; a < max; a++)
            if (sieve[a])
                primes.push(a);

        return primes;
    }


    run(benchmark) {
        console.debug("start " + this.constructor.name);
        this.start();
        this.prime(...benchmark.parameters);
        this.stop();
        console.debug("stop " + this.constructor.name);
    }
}
export default SieveOfAtkinPrimeJS;

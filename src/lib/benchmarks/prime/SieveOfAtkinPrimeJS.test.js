import SieveOfAtkinPrimeJS from "./SieveOfAtkinPrimeJS";

it('calculates primes', () => {

    let actual = new SieveOfAtkinPrimeJS().prime(20);

    expect(actual).toEqual([2, 3, 5, 7, 11, 13, 17, 19]);
});

import FibonacciJS from "./FibonacciJS";

it('calculates Towser of Hanoi', () => {
    let fibonacci = new FibonacciJS();
    let actual = fibonacci.fibonacci(20);
    expect(actual).toEqual(6765);
});

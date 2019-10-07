import Sha512JS from "./Sha512JS";

it('calculates Towser of Hanoi', () => {
    let data = "\x01\x02\x03\x04\x05\x06\x07\x08";
    let actual = new Sha512JS().sha512(data);

    expect(actual).toEqual("1818cc2acd207880a07afc360fd0da87e51ccf17e7c604c4eb16be5788322724c298e1fcc66eb293926993141ef0863c09eda383188cf5df49b910aacac17ec5");
});

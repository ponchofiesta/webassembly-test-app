import Sha256JS from "./Sha256JS";

it('calculates Towser of Hanoi', () => {
    let data = "\x01\x02\x03\x04\x05\x06\x07\x08";
    let actual = new Sha256JS().sha256(data);

    expect(actual).toEqual("66840dda154e8a113c31dd0ad32f7f3a366a80e8136979d8f5a101d3d29d6f72");
});

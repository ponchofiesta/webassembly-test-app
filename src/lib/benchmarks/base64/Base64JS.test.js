import Base64JS from "./Base64JS";

it('base64', () => {
    let base64 = new Base64JS();

    let expected = "AQID";
    let actual = base64.base64(new Uint8Array([1, 2, 3]));

    expect(actual).toEqual(expected);
});

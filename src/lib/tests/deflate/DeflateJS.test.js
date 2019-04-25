import * as aesjs from "aes-js";
import DeflateJS from "./DeflateJS";

it('compresses', () => {
    let data = "abcdefghijklmnop";
    let dataBytes = aesjs.utils.utf8.toBytes(data);

    // compressed data + zlib header and trailor
    let expected = new Uint8Array([75, 76, 74, 78, 73, 77, 75, 207, 200, 204, 202, 206, 201, 205, 203, 47, 0, 0]);
    let actual = new DeflateJS().deflate(dataBytes);

    expect(actual).toEqual(expected);
});

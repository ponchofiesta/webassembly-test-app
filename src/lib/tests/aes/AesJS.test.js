import AesJS from "./AesJS";
import * as aesjs from "aes-js";

it('encrypts via AES CTR', () => {

    let key = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
    let iv = [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32];
    let data = aesjs.utils.utf8.toBytes("abcdefghijklmnop");

    let aes = new AesJS();

    let expected = new Uint8Array([]);
    let actual = aes.aes(key, iv,  data);
    expect(actual).toEqual(expected);
});

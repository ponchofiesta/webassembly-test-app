import AesJS from "./AesJS";
import * as aesjs from "aes-js";

it('encrypts via AES CTR', () => {

    let key = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
    let iv = [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32];
    let text = "abcdefghijklmnop";
    let data = aesjs.utils.utf8.toBytes(text);

    let aes = new AesJS();

    let expected = new Uint8Array([239, 202, 78, 31, 15, 43, 252, 66, 190, 102, 119, 142, 185, 132, 167, 184]);
    let encrypted = aes.aes_encrypt(key, iv,  data);

    expect(encrypted).toEqual(expected);

    let decrypted = aes.aes_decrypt(key, iv,  encrypted);
    let decrypted_text = aesjs.utils.utf8.fromBytes(decrypted);

    expect(decrypted_text).toEqual(text);
});

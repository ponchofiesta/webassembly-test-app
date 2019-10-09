import Sha256JS from "./Sha256JS";
import forge from "node-forge";

const crypto = require('crypto');

it('sha256', () => {
    let data = new Uint8Array([1, 2, 3, 4, 5, 6, 7, 8]);
    let buffer = String.fromCharCode.apply(null, data);
    let actual = new Sha256JS().sha256(buffer);

    expect(actual).toEqual("66840dda154e8a113c31dd0ad32f7f3a366a80e8136979d8f5a101d3d29d6f72");
});

it('forge fromCharCode', () => {
    let data = new Uint8Array([1, 2, 3, 4, 5, 6, 7, 8]);
    const md = forge.md.sha256.create();
    let buffer = String.fromCharCode.apply(null, data);
    md.update(buffer);
    let hex = md.digest().toHex();
    expect(hex).toEqual("66840dda154e8a113c31dd0ad32f7f3a366a80e8136979d8f5a101d3d29d6f72");
});

it('crypto', () => {
    let data = new Uint8Array([1, 2, 3, 4, 5, 6, 7, 8]);
    const hash = crypto.createHash('sha256');
    hash.update(data);
    const hex = hash.digest('hex');
    expect(hex).toEqual("66840dda154e8a113c31dd0ad32f7f3a366a80e8136979d8f5a101d3d29d6f72");
});


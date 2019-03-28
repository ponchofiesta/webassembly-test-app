class Wasm {

    static instance;

    constructor() {
        if(Wasm.instance){
            return Wasm.instance;
        }
    }
}

export default Wasm;

import StringsDynamicJS from "./StringsDynamicJS";

class StringsStaticJS extends StringsDynamicJS {

    run(benchmark) {
        console.debug("start " + this.constructor.name);
        super.start();
        let a = "hello world";
        let b = "world";
        for (let i = 0; i < benchmark.parameters[0]; i++) {
            super.strings_dynamic(a, b);
        }
        super.stop();
        console.debug("stop " + this.constructor.name);
    }
}
export default StringsStaticJS;

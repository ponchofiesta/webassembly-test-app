import Benchmark from "../Benchmark";

class DomJS extends Benchmark {

    dom(n) {
        const body = document.body;
        const container = document.createElement("div");
        body.appendChild(container);

        for (let i = 0; i < n; i++) {
            const header = document.createElement("h3");
            header.textContent = "Header " + i;
            const paragraph = document.createElement("p");
            paragraph.textContent = "Paragraph " + i;
            container.appendChild(header);
            container.appendChild(paragraph);
        }

        body.removeChild(container);
    }

    run(benchmark) {
        console.debug("start " + this.constructor.name);
        super.start();
        this.dom(...benchmark.parameters);
        super.stop();
        console.debug("stop " + this.constructor.name);
    }
}
export default DomJS;

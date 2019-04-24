const runLater = (run) => new Promise(resolve => setTimeout(async () => {
    let result = await run();
    resolve(result);
}, 1));
export default runLater;

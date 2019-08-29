const runLater = (run) => new Promise(resolve => setTimeout(async () => {
    let result = await run();
    resolve(result);
}, 10));
export default runLater;

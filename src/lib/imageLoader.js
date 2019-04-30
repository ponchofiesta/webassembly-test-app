const imageLoader = src => {
    const promise = new Promise((resolve, reject) => {
        const image = new Image();
        image.addEventListener("load", event => {
            resolve(image);
        }, false);
        image.addEventListener("error", errorEvent => {
            reject(errorEvent);
        }, false);
        image.src = src;
    });
    return promise;
};
export {imageLoader};
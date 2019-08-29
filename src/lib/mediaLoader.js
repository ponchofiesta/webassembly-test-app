const mediaLoader = (src, element) => {
    const promise = new Promise((resolve, reject) => {
        if (element instanceof HTMLImageElement) {
            element.addEventListener("load", event => {
                resolve(element);
            }, false);
            element.src = src;
        } else if (element instanceof HTMLVideoElement) {
            element.addEventListener("loadeddata", event => {
                resolve(element);
            }, false);
            element.src = src;
            element.load();
        } else {
            throw new Error("Invalid media type " + typeof element);
        }
        element.addEventListener("error", errorEvent => {
            reject(errorEvent);
        }, false);
    });
    return promise;
};

export {mediaLoader};

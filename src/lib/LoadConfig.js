const loadConfig = () => fetch('config.json')
    .then(response => {
        if (response.ok) {
            return response.json();
        }
        throw new Error(response.statusText);
    });

export default loadConfig;

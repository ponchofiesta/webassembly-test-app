const roundFormatter = value => {
    let decimals = 0;
    if (value < 1) decimals = 3;
    else if (value < 10) decimals = 2;
    else if (value < 100) decimals = 1;
    return value.toFixed(decimals);
};
const msFormatter = value => roundFormatter(value) + " ms";
const fpsFormatter = value => roundFormatter(value) + " fps";

export {roundFormatter, msFormatter, fpsFormatter};

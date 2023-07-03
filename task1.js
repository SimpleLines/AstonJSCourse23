const isUndefined = (arg) => typeof arg === 'undefined';
const isString = (arg) => typeof arg === 'string';
const validateAndTransformString = (arg) => {
    const properArg = Number(arg)
    if (isNaN(properArg)) {
        throw new Error('В функции sum некорректные данные');
    }
    return properArg;
};

function sum(a, b) {
    if (isUndefined(a) || isUndefined(b)) {
        throw new Error('В функции sum не задано число в первом или втором аргументе');
    } else if (isString(a) || isString(b)) {
        const result = validateAndTransformString(a) + validateAndTransformString(b);
        return parseFloat(result.toFixed(3));
    } else {
        const result = a + b;
        return parseFloat(result.toFixed(3));
    }
};



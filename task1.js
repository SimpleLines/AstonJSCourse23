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

sum('20', 0.403333);


const validateGetNumberRadixParams = (usersNum, usersRadix) => {
    if (isUndefined(usersNum) || isUndefined(usersRadix)) {
        throw new Error('Функция getNumberRadix могла быть вызвана без параметров');
    } else if(isNaN(+usersNum)){
        throw new Error('Функция getNumberRadix, в параметр num было передано не число');
    } else if (+usersNum < 0) {
        throw new Error('Функция getNumberRadix, в параметр num было передано отрицательное число');
    } else if (!Number.isInteger(+usersNum)) {
        throw new Error('Функция getNumberRadix, в параметр num было передано не целое число');
    } else if (isNaN(+usersRadix)) {
        throw new Error('Функция getNumberRadix была вызвана с некорректными параметрами, radix не число');
    } else if (usersRadix < 2 || usersRadix > 16) {
        throw new Error('Функция getNumberRadix вызвана с параметром radix больше 16 или меньше 2');
    }
};

function getNumberRadix(number, radix) {
    validateGetNumberRadixParams(number, radix);

    return Number(number).toString(radix);
};

console.log(getNumberRadix('4', 2));
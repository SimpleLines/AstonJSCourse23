
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

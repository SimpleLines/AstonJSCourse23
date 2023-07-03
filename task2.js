const validateArgFuncNumberRadix = (userNumber, userRadix) => {
    if(
        !(
            Number.isInteger(userNumber) || 
            typeof userNumber === 'string' &&
            +userNumber > 0
        ) || 
        !(
            Number.isInteger(userRadix) &&
            userRadix >= 2 &&
            userRadix <= 16
        )
    ) {
        throw new Error ("Функция getNumberRadix была вызвана с некорректными параметрами");
    };
}

function getNumberRadix(number, radix) {
    validateArgFuncNumberRadix(number, radix);
    return Number(number).toString(radix);
}
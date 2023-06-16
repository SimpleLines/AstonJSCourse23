const getNumberRadix = (number, radix) => {
    if (typeof number == 'string') {
        number = +number
    }

    if (
        number < 0 ||
        isNaN(number) ||
        !Number.isInteger(number) ||
        radix > 16 ||
        radix < 2 ||
        isNaN(radix)
    ) {
        throw Error(`Функция NumberRadix
        была вызвана с некорректными параметрами`)
    }

    return JSON.stringify(number.toString(radix))
}

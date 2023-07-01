const getNumberRadix = (number, radix) => {
    let num = parseInt(number)
    if (Number.isInteger(num) && num > 0 && radix >= 2 && radix <= 16) {
        return num.toString(radix)
    } else {
        throw new Error("Функция getNumberRadix была вызвана с некорректными параметрами")
    }
}


function getNumberRadix(number, radix) {
    number = +number;
    radix = +radix;

    if (Number.isInteger(number) && number > 0 && !isNaN(radix) && radix >= 2 && radix <= 16) {
        return number.toString(Number(radix));
    } else {
        'Функция getNumberRadix была вызвана с некорректными параметрами';
    }
}




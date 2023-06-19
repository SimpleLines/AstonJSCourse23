function getNumberRadix(number, radix) {
  if (Number.isInteger(+number) && +number > 0 && 2 <= radix && radix <= 16) {
    return parseInt(number).toString(radix);
  } else {
    throw new Error('Функция getNumberRadix была вызвана с некорректными параметрами');
  }
}
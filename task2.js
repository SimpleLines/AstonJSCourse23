const getNumberRadix = (number, radix) => {
  let checkNumber = parseFloat(number) && number > 0;
  let checkRadix = typeof radix === 'number' && radix >= 2 && radix <= 16;
  if (checkNumber && checkRadix) {
    return (+number).toString(radix)
  }
  throw Error('Функция getNumberRadix была вызвана с некорректными параметрами')
};
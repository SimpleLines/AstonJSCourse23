function getNumberRadix(number, radix) {
  try {
    if (
      !Number.isInteger(number) &&
      (typeof number !== 'string' || !Number.isInteger(parseInt(number))) &&
      number > 0
    ) {
      throw new Error(
        'Функция getNumberRadix была вызвана с некорректными параметрами'
      );
    }

    if (radix < 2 || radix > 16) {
      throw new Error(
        'Функция getNumberRadix была вызвана с некорректными параметрами'
      );
    }

    const strNumber = number.toString();
    const newNumber = parseInt(strNumber, 10).toString(radix);
    if (newNumber === 'NaN') {
      throw new Error(
        'Функция getNumberRadix была вызвана с некорректными параметрами'
      );
    }

    return newNumber;
  } catch (error) {
    return error.message;
  }
}

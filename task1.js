function sum(a, b) {
  let num1 = parseFloat(a);
  let num2 = parseFloat(b);

  if (isNaN(num1) || isNaN(num2)) {
    return null;
  }

  let result = (num1 + num2).toFixed(3);

  while (result.endsWith('0') || result.endsWith('.')) {
    result = result.slice(0, -1);
  }

  return result;
}

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

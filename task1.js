function sum(a, b) {
  return Math.round((+a + +b) * 1000) / 1000;
}

function getNumberRadix(number, radix) {
  const newNumber = +number;
  if (!(typeof newNumber == 'number' && newNumber > 0 && newNumber % 1 == 0)) {
    throw Error(
      'Функция getNumberRadix была вызвана с некорректными параметрами'
    );
  }
  if (!(typeof radix == 'number' && radix >= 2 && radix <= 16)) {
    throw Error(
      'Функция getNumberRadix была вызвана с некорректными параметрами'
    );
  }
  return newNumber.toString(radix);
}

function getNumberRadix(number, radix) {
  const isCorrectNumber = ['string', 'number'].includes(typeof number) && Number.isInteger(+number) && +number > 0;
  const isCorrectRadix = typeof radix === 'number' && 2 <= radix <= 16;
  if (!isCorrectNumber || !isCorrectRadix) {
    const message = 'Функция getNumberRadix была вызвана с некорректными параметрами';
    throw Error(message);
  }

  return (+number).toString(radix);
}
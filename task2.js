const getNumberRadix = (number, radix) => {
  const ERROR_MESSAGE = 'Функция getNumberRadix была вызвана с некорректными параметрами';
  if (!number || !radix) throw Error(ERROR_MESSAGE);
  if (!Math.sign(number)) throw Error(ERROR_MESSAGE);
  if (radix < 2 || radix > 16) throw Error(ERROR_MESSAGE);
  return (+number).toString(radix);
}
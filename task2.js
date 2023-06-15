function getNumberRadix(number, radix) {
  if (
    !Number.isInteger(+number) ||
    Number.isNaN(+number) ||
    +number < 0 ||
    typeof radix !== 'number' ||
    radix < 2 ||
    radix > 16
  )
    throw new Error(
      'Функция getNumberRadix была вызвана с некорректными параметрами'
    );

  return (+number).toString(radix);
}

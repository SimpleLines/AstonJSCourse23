function getNumberRadix(number, radix) {
  if (typeof number === "string") {
    number = parseInt(number, 10);
  }
  if (!Number.isInteger(number) || number <= 0) {
    throw new Error(
      "Функция getNumberRadix была вызвана с некорректными параметрами"
    );
  }
  if (!Number.isInteger(radix) || radix < 2 || radix > 16) {
    throw new Error(
      "Функция getNumberRadi была вызвана с некорректными параметрами"
    );
  }
  return number.toString(radix);
}
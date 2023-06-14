function getNumberRadix(number, radix) {
  if (typeof number === "string") {
    number = Number(number);
    if (isNaN(number)) {
      throw new Error(
        "Функция getNumberRadix была вызвана с некорректными параметрами"
      );
    }
  }

  if (radix < 2 || radix > 16 || typeof radix !== "number") {
    throw new Error(
      "Функция getNumberRadix была вызвана с некорректными параметрами"
    );
  }
  return number.toString(radix);
}

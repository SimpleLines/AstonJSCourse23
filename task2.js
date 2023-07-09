function getNumberRadix(number, radix) {
  if (
    !(Number.isInteger(number) && number > 0) &&
    !(
      typeof number === "string" &&
      Number.isInteger(parseInt(number)) &&
      parseInt(number) > 0
    )
  ) {
    throw new Error(
      "Функция getNumberRadix была вызвана с некорректными параметрами"
    );
  }

  if (!(Number.isInteger(radix) && radix >= 2 && radix <= 16)) {
    throw new Error(
      "Функция getNumberRadix была вызвана с некорректными параметрами"
    );
  }

  let result;
  if (typeof number === "string") {
    result = parseInt(number).toString(radix);
  } else {
    result = number.toString(radix);
  }

  return result;
}

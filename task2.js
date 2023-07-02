const getNumberRadix = (number, radix) => {
  if (
    Number.isInteger(+number) &&
    !isNaN(radix) &&
    +number > 0 &&
    radix >= 2 &&
    radix <= 16
  ) {
    return Number(number).toString(Number(radix));
  } else {
    throw Error(
      "Функция getNumberRadix была вызвана с некорректными параметрами"
    );
  }
};

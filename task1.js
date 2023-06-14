function sum(a, b) {
  return +`${(a + b).toFixed(3)}`;
}

function validRadix(radix) {
  return radix < 0 || radix > 16 || isNaN(radix);
}

function validNum(number) {
  return isNaN(number) || number < 0;
}

function getNumberRadix(number, radix) {
  let errMessage =
    "Функция getNumberRadix была вызвана с некорректными параметрами - ";
  if (validRadix(radix)) throw new Error(errMessage + `${radix}`);
  if (validNum(number)) throw new Error(errMessage + `${number}`);
  return `${Number(number).toString(radix)}`;
}
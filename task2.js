function getNumberRadix(number, radix) {
    if (typeof number === "string") {
      number = parseInt(number);
    }
    if (isNaN(number) || !Number.isInteger(number) || number < 1) {
      throw Error("Функция getNumberRadix была вызвана с некорректными параметрами");
    }
    if (!Number.isInteger(radix) || radix < 2 || radix > 16) {
      throw Error("Функция getNumberRadix была вызвана с некорректными параметрами");
    }
    
    return number.toString(radix);
  }
  console.log(getNumberRadix("16", 8))
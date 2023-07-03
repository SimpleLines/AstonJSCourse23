function sum(a, b) {
  number1 = parseFloat(a);
  number2 = parseFloat(b);

  if (isNaN(number1) || isNaN(number2)) {
    return console.log("необходимо ввести 2 числа");
  }

  let result = number1 + number2;

  result = result.toFixed(3);

  return result;
}

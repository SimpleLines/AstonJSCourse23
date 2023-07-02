function sum(a, b) {
  let num1 = parseFloat(a);
  let num2 = parseFloat(b);

  if (isNaN(num1) || isNaN(num2)) {
    return null;
  }

  let result = (num1 + num2).toFixed(3);

  while (result.endsWith('0') || result.endsWith('.')) {
    result = result.slice(0, -1);
  }

  return result;
}


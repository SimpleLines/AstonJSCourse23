function sum(a, b) {
  const res = +a + +b;
  if(isNaN(res)) {
      throw new Error('Сумма переданных аргументов не равна числу');
  }

  return +res.toFixed(3);
}

function getNumberRadix(number, radix) {
  if(typeof +number !== 'number') {
    throw new Error('Функция getNumberRadix была вызвана с некорректными параметрами');
  }

  if(+number < 0 || !Number.isInteger(+number) || typeof radix !== 'number'|| radix < 2 || radix > 16) {
    throw new Error('Функция getNumberRadix была вызвана с некорректными параметрами');
  }
  
  let res = [];
  let hexadecimalNums = {
    10: 'A',
    11: 'B',
    12: 'C',
    13: 'D',
    14: 'E',
    15: 'F'
  };

  while(number > 0) {
    let rest = number % radix;
    if(rest > 9) {
        rest = hexadecimalNums[rest];
    }
    res.unshift(rest);
    number = Math.floor(number / radix);
  }

  return res.join('');
}
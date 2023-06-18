function sum(a, b) {
  const res = +a + +b;
  if(isNaN(res)) {
      throw new Error('Сумма переданных аргументов не равна числу');
  }

  return +res.toFixed(3);
}
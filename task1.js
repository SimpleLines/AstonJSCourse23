function sum(a, b) {
  let checkA = isNaN(parseFloat(a)) || isNaN(a);
  let checkB = isNaN(parseFloat(b)) || isNaN(b);
  return checkA || checkB ? 'Некорректные данные' : +((+a + +b).toFixed(3))
};
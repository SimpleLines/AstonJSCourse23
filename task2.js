// задача 2
function getInterval(arr, from, to) {
  if (!Array.isArray(arr) || arr.some(isNaN)) {
    throw new Error(
      'В функцию getInterval были переданы невалидные параметры. Параметр arr должен содержать только числовые значения.'
    );
  }
  if (isNaN(from)) {
    throw new Error(
      'В функцию getInterval были переданы невалидные параметры. Параметр from должен быть числом.'
    );
  }
  if (isNaN(to)) {
    throw new Error(
      'В функцию getInterval были переданы невалидные параметры. Параметр to должен быть числом.'
    );
  }
  if (from > to) {
    [from, to] = [to, from];
  }
  return arr.filter((num) => num >= from && num <= to);
}


function getInterval(arr, from, to) {
  if (!Array.isArray(arr) || !arr.every(Number.isFinite)) {
    throw new Error('В функцию getInterval были переданы невалидные параметры. Параметр arr должен содержать только числовые значения.');
  }

  if (!Number.isFinite(from)) {
    throw new Error('В функцию getInterval были переданы невалидные параметры. Параметр from должен быть числом.');
  }

  if (!Number.isFinite(to)) {
    throw new Error('В функцию getInterval были переданы невалидные параметры. Параметр to должен быть числом.');
  }

  if (from > to) {
    [from, to] = [to, from]
  }

  return arr.filter((el) => {
    return (from <= el && el <= to);
  })
}
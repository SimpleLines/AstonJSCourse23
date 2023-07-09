function getInterval(arr, from, to) {
  if (!Array.isArray(arr) || arr.some(item => typeof item !== 'number')) {
    throw new Error('В функцию getInterval были переданы невалидные параметры. Параметр arr должен содержать только числовые значения');
  }

  if (typeof from !== 'number') {
    throw new Error('В функцию getInterval были переданы невалидные параметры. Параметр from должен быть числом');
  }

  if (typeof to !== 'number') {
    throw new Error('В функцию getInterval были переданы невалидные параметры. Параметр to должен быть числом');
  }

  const start = Math.min(from, to);
  const end = Math.max(from, to);

  return arr.filter(item => item >= start && item <= end);
}
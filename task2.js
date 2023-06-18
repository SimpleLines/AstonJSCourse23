const getInterval = (arr, from, to) => {
  const ERROR_MESSAGES = [
    'В функцию getInterval были переданы невалидные параметры. Параметр arr должен содержать только числовые значения',
    'В функцию getInterval были переданы невалидные параметры. Параметр from должен быть числом.',
    'В функцию getInterval были переданы невалидные параметры. Параметр to должен быть числом.'
  ];
  if (typeof from !== 'number') throw new Error(ERROR_MESSAGES[1]);
  if (typeof to !== 'number') throw new Error(ERROR_MESSAGES[2]);
  if (from > to) [from, to] = [to, from]

  return arr.filter(el => {
    if (typeof el !== 'number') throw new Error(ERROR_MESSAGES[0]);

    return el >= from && el <= to;
  });
}
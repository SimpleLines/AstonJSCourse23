const getInterval = (arr, from, to) => {
  const ERROR_MESSAGES = [
    'В функцию getInterval были переданы невалидные параметры.',
    `Параметр arr должен содержать только числовые значения`,
    'Параметр from должен быть числом.',
    'Параметр to должен быть числом.'
  ];
  if (typeof from !== 'number') {
    throw new Error(`${ERROR_MESSAGES[0]} ${ERROR_MESSAGES[2]}`);
  }
  if (typeof to !== 'number') {
    throw new Error(`${ERROR_MESSAGES[0]} ${ERROR_MESSAGES[3]}`);
  }

  return arr.filter(el => {
    if (typeof el !== 'number') {
      throw new Error(`${ERROR_MESSAGES[0]} ${ERROR_MESSAGES[1]}`);
    }

    return from > to ? (el >= to && el <= from) : (el >= from && el <= to);
  });
}
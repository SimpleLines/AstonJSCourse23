const getInterval = (arr, from, to) => {
  arr.forEach((number) => {
    if (typeof number == 'string') {
      throw Error(`В функцию getInterval были переданы невалидные параметры. Параметр arr
            должен содержать только числовые значения`);
    }
  });

  if (typeof from == 'string' || typeof to == 'string') {
    throw Error(`В функцию getInterval были переданы невалидные параметры. Параметр ${typeof from == 'string' ? 'from' : 'to'}
        должен быть числом.`);
  }

  if (from > to) {
    return arr.filter((number) => number <= from && number >= to);
  }
  return arr.filter((number) => number >= from && number <= to);
};

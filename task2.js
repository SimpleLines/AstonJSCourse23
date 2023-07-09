const getInterval = (arr, from, to) => {
  if (!Number.isFinite(from)) {
    throw Error(`Параметр ${from} должен быть числом`);
  }
  if (!Number.isFinite(to)) {
    throw Error(`Параметр ${to} должен быть числом`);
  }
  arr.forEach((el) => {
    if (!Number.isFinite(el)) {
      throw Error(`Параметр arr должен содержать только числовые значения`);
    }
  });
  return from < to
    ? arr.filter((el) => el >= from && el <= to)
    : arr.filter((el) => el >= to && el <= from);
};

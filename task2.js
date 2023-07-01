function getInterval(arr, from, to) {
  if (arr.some((el) => typeof el !== "number")) {
    throw new Error(
      "В функцию getInterval были переданы невалидные параметры. Параметр arr должен содержать только числовые значения"
    );
  }
  if (typeof from !== "number") {
    throw new Error(
      "В функцию getInterval были переданы невалидные параметры. Параметр from должен содержать только числовые значения"
    );
  }
  if (typeof to !== "number") {
    throw new Error(
      "В функцию getInterval были переданы невалидные параметры. Параметр to должен содержать только числовые значения"
    );
  }
  return arr.filter((el) => {
    return el >= from && el <= to;
  });
}
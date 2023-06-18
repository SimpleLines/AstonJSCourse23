const throwError = (err) =>
  `В функцию getInterval были переданы невалидные параметры. Параметр ${err} должен
  ${err === "arr" ? "содержать только числовые значения" : "быть числом"}`;

const isNaN = (n) => Number.isNaN(+n);

function getInterval(arr, from, to) {
  if (isNaN(from)) throw new Error(throwError("from"));
  if (isNaN(to)) throw new Error(throwError("to"));
  return arr.filter((el) => {
    if (isNaN(el)) throw new Error(throwError("arr"));
    return from < to ? el >= from && el <= to : el <= from && el >= to;
  });
}
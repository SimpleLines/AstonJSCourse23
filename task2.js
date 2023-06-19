const getInterval = (arr, from, to) => {
  const checkArray = arr.every((elem) => Number.isFinite(elem));
  if (!checkArray) {
    throw Error ('В функцию getInterval были переданы невалидные параметры. Параметр arr должен содержать только числовые значения')
  } else if (!Number.isFinite(from)) {
    throw Error ('В функцию getInterval были переданы невалидные параметры. Параметр from должен быть числом')
  } else if (!Number.isFinite(to)) {
    throw Error ('В функцию getInterval были переданы невалидные параметры. Параметр to должен быть числом')
  } 
  return arr.filter((elem) => elem >= from && elem <= to || elem <= from && elem >= to);
};
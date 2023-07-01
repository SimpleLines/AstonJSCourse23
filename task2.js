const errorParam = (param) => Number.isNaN(param) || typeof param !== 'number';
const messageErrorParam = (el) =>
  `В функцию getInterval были переданы невалидные параметры. Параметр ${el} должен быть числом.`;
const messageErrorArr = (el) =>
  `В функцию getInterval были переданы невалидные параметры. Параметр ${el} должен содержать только числовые значения.`;

const getInterval = (arr, from, to) => {
  if (errorParam(from)) throw new Error(messageErrorParam('from'));
  if (errorParam(to)) throw new Error(messageErrorParam('to'));
  if (!Array.isArray(arr) || arr.some((el) => errorParam(el)))
    throw new Error(messageErrorArr('arr'));
  const filterArr = arr.filter((el) => {
    return el >= `${from > to ? to : from}` && el <= `${from > to ? from : to}`;
  });
  return filterArr;
};

function getInterval(arr, from, to) {
  const isNumberArray = checkIfNumberArray(arr);
  if (!isNumberArray) {
    throw Error(
      'В функцию getInterval были переданы невалидные параметры. Параметр arr должен содержать только числовые значения'
    );
  }

  const isValidFrom = checkIfValidBoundary(from);
  const isValidTo = checkIfValidBoundary(to);
  if (!isValidFrom) {
    throw Error('В функцию getInterval были переданы невалидные параметры. Параметр from должен быть числом');
  }
  if (!isValidTo) {
    throw Error('В функцию getInterval были переданы невалидные параметры. Параметр to должен быть числом');
  }

  const checkIfIncludedInInterval = (num) => (from <= to ? from <= num && num <= to : from >= num && num >= to);
  let newArr = [];
  const arrLength = arr.length;
  for (let i = 0; i < arrLength; i++) {
    const isIncludedInInterval = checkIfIncludedInInterval(arr[i]);
    console.log(arr[i], isIncludedInInterval);
    if (isIncludedInInterval) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

function checkIfNumberArray(arr) {
  return arr.every((el) => typeof el === 'number' && !isNaN(el));
}

function checkIfValidBoundary(bound) {
  return typeof bound === 'number' && !isNaN(bound);
}
function getUniqArray(arr) {
  const isNumberArray = checkIfNumberArray(arr);
  if (!isNumberArray) {
    throw Error(
      'В функцию getUniqArray были переданы невалидные параметры. Параметр arr должен содержать только числовые значения'
    );
  }

  const newArr = [];
  const ununiqArr = [];
  const arrLength = arr.length;
  for (let i = 0; i < arrLength; i++) {
    const elem = arr[i];
    if (ununiqArr.includes(elem)) {
      continue;
    }

    let flag = 0;
    for (let j = i + 1; j < arrLength; j++) {
      if (elem === arr[j]) {
        ununiqArr.push(elem);
        flag++;
        break;
      }
    }

    if (flag === 0) {
      newArr.push(elem);
    }
  }
  return newArr;
}

function checkIfNumberArray(arr) {
  return arr.every((el) => typeof el === 'number' && !isNaN(el));
}
function deleteElementFromArray(arr, elem) {
  if (!Array.isArray(arr)) {
    throw Error("The parameter 'arr' must be an array");
  }

  const newArr = [];
  const arrLength = arr.length;
  let isDeleted = false;
  for (let i = 0; i < arrLength; i++) {
    if (!isDeleted && arr[i] === elem) {
      isDeleted = true;
    } else {
      newArr.push(arr[i]);
    }
  }

  return !isDeleted ? arr : newArr;
}
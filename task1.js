const deleteElementFromArray = (arr, elem) => {
  const copyArr = [...arr];
  const foundIndex = copyArr.indexOf(elem);
  if (foundIndex !== -1) {
    copyArr.splice(foundIndex, 1);
    return copyArr;
  }

  return arr;
};

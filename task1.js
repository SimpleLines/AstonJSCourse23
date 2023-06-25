const deleteElementFromArray = (arr, elem) => {
  const newArr = [...arr];
  const foundElement = newArr.indexOf(elem);
  if (foundElement === -1) {
    return arr;
  }
  newArr.splice(foundElement, 1);
  return newArr;
};
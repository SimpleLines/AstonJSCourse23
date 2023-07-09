function deleteElementFromArray(arr, elem) {
  const index = arr.indexOf(elem);
  if (index === -1) {
    return arr;
  }
  const newArr = [...arr];
  newArr.splice(index, 1);

  return newArr;
}

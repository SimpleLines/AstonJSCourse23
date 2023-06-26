function deleteElementFromArray(arr, elem) {
  const index = arr.indexOf(elem);
  const newArr = [...arr];

  index !== -1 ? newArr.splice(index, 1) : newArr;
  return newArr;
}

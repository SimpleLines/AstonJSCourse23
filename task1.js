function deleteElementFromArray(arr, elem) {
  if (!arr.includes(elem)) {
    return arr;
  }
  let indexEl = arr.findIndex((el) => el == elem);
  const newArr = arr.slice(0, indexEl).concat(arr.slice(indexEl + 1));
  return newArr;
}

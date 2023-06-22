function deleteElementFromArray(arr, elem) {
  const index = arr.indexOf(elem);

  if (index === -1) {
    return arr;
  }
  return arr.filter((elem, i) => i !== index);
}

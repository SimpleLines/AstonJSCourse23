function deleteElementFromArray(arr, elem) {
  const index = arr.indexOf(elem);
  if (index === -1) return arr;
  return arr.filter((el, i) => {
    return index === i ? false : true;
  });
}
const deleteElementFromArray = (arr, elem) => {
  const searchedIndex = arr.indexOf(elem);
  if (searchedIndex === -1) {
    return arr;
  }

  return [...arr.slice(0, searchedIndex), ...arr.slice(searchedIndex + 1)];
}

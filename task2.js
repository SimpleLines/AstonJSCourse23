const addElementsToArray = (arr, index = arr.length) => (...elems) => {
  if (!Number.isInteger(index) || index < 0) {
    throw new Error('the index cannot be a negative number or a fractional number');
  }

  return [...arr.slice(0, index), ...elems, ...arr.slice(index)];
}

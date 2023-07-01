function addElementsToArray(arr, index = arr.length) {
  if(!Number.isInteger(index) || index < 0) {
    throw new Error('the index cannot be a negative number or a fractional number');
  }

  let copy = [...arr];

  return function (...elems) {
    copy.splice(index, 0, ...elems);
    return copy;
  }
}
function addElementsToArray(arr, index) {
  if (index === undefined) {
    index = arr.length;
  }
  
  return function (...elements) {
    if (index < 0 || !Number.isInteger(index)) {
      throw new Error(
        'the index cannot be a negative number or a fractional number'
      );
    }
    let newArr = [...arr];
    newArr.splice(index, 0, ...elements);

    return newArr;
  };
}

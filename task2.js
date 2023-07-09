function addElementsToArray(arr, index = arr.length) {
  if (index < 0 || !Number.isInteger(index)) {
    throw new Error(
      "the index cannot be a negative number or a fractional number "
    );
  }
  return (...els) => {
    const newArr = [...arr];
    newArr.splice(index, 0, ...els);
    return newArr;
  };
}
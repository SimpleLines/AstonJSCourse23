function addElementsToArray(arr, index) {
  return function (...elements) {
    if (index !== undefined && (!Number.isInteger(index) || index < 0)) {
      throw new Error(
        'The index cannot be a negative number or a fractional number.'
      );
    }

    const newArray = [...arr];

    if (index === undefined || index > arr.length) {
      newArray.push(...elements);
    } else {
      newArray.splice(index, 0, ...elements);
    }

    return newArray;
  };
}

function addElementsToArray(arr, index) {
  if (!Array.isArray(arr)) {
    throw Error("The parameter 'arr' must be an array");
  }

  return function (...elems) {
    const isPositiveInteger = Number.isInteger(index) && index >= 1;
    if (index === undefined || index > arr.length) {
      return [...arr, ...elems];
    } else if (!isPositiveInteger) {
      throw Error('The index cannot be a negative number or a fractional number');
    }

    const firstArrPart = arr.slice(0, index);
    const secondArrPart = arr.slice(index);

    return [...firstArrPart, ...elems, ...secondArrPart];
  };
}
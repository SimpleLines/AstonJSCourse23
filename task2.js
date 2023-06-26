const addElementsToArray = (arr, index) => {
  let array = [...arr];
  return (...elems) => {
    if (index === undefined) return arr.concat(elems);
    if (!Number.isInteger(index) || index < 0) {
      throw new Error ('the index cannot be a negative number or a fractional number')
    };
    array.splice(index, 0, ...elems);
    return array;
  };
};
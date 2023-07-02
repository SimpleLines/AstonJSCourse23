const addElementsToArray =
  (arr, index) =>
  (...el) => {
    if (!Number.isInteger(index) || index < 0) {
      throw Error(
        " the index cannot be a negative number or a fractional number "
      );
    }
    let newArr = [];
    return arr.length - 1 < index || index === undefined
      ? newArr.concat(arr, ...el)
      : newArr.concat(arr.slice(0, index), ...el, arr.slice(index));
  };

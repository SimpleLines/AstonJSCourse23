const addElementsToArray =
  (arr, index = arr.length) =>
  (...elem) => {
    if (Number.isNaN(index) || !Number.isInteger(index) || index < 0)
      throw new Error(
        'the index cannot be a negative number or a fractional number'
      );
    const bigArr = [...arr];
    bigArr.splice(index, 0, ...elem);
    return bigArr;
  };

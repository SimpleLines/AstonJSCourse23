const addElementsToArray =(arr, index) =>(elem1, elem2, ...elemN) => {
    let newArr = [...arr];
    let tempArr = [elem1, elem2, elemN];
    if (index < 0 || !Number.isInteger(index)) {
      throw new Error(
        `the index cannot be a negative number or a fractional number`
      );
    }
    if (index) {
      newArr.splice(index, 0, tempArr);
    } else {
      newArr.push(tempArr);
    }
    return newArr.flat(Infinity);
  };
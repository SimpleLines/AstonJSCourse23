const deleteElementFromArray = (arr, elem) => {
  let indexElem = arr.indexOf(elem);
  if (indexElem === -1) {
    return arr
  };
  return arr.filter((_, i) => indexElem !== i);
};
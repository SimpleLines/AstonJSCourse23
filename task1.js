const deleteElementFromArray = (arr, elem) => {
  const newArr = [...arr];
  const idx = newArr.indexOf(elem);
  if (idx !== -1) newArr.splice(idx, 1);
  return newArr;
};
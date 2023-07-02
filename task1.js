Array.prototype.filterArray = function (cb, thisArg) {
  const result = [];
  cb = cb.bind(thisArg);
  const array = [...this];
  for (let i = 0; i < array.length; i++) {
    let item = array[i];
    if (cb(item, i, array)) {
      result.push(array[i]);
    }
  }
  return result;
};
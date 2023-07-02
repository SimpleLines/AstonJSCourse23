Array.prototype.filterArray = function (cb, thisArg) {
  const arr = this;
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (cb.call(thisArg, arr[i], i, arr)) {
      result.push(arr[i]);
    }
  }

  return result;
};

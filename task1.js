// задача 1
Array.prototype.filterArray = function (cb, thisArg) {
  const newArray = [];
  for (let i = 0; i < this.length; i++) {
    if (cb.call(thisArg, this[i], i, this)) {
      newArray.push(this[i]);
    }
  }
  return newArray;
};

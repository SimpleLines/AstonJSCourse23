Array.prototype.filterArray = function (cb, thisArg) {
  const newArr = [];
  let callback = cb.bind(thisArg);

  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      newArr.push(this[i]);
    }
  }

  return newArr;
};

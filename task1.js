function filterArray(cb, thisArg) {
  const newArr = [];
  for (let i = 0; i < this.length; i++) {
    if (thisArg) {
      if (cb.call(thisArg, this[i])) {
        newArr.push(this[i]);
      }
    } else if (cb(this[i])) {
      newArr.push(this[i]);
    }
  }
  return newArr;
}

Array.prototype.filterArray = filterArray;

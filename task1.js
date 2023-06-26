Array.prototype.filterArray = function (cb, thisArg) {
  const arrFilter = [];
  for (let i = 0; i < this.length; i++) {
    if (cb.call(thisArg, this[i], i)) arrFilter.push(this[i]);
  }
  return arrFilter;
};

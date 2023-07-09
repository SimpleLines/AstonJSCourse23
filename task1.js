Array.prototype.filterArray = function (cb, thisArg = {}) {
  cb = cb.bind(thisArg);
  const result = [];
  for (let i = 0; i < this.length; i++) {
    const cur = this[i];
    if (cb(cur, i, this)) result.push(cur);
  }
  return result;
};
Array.prototype.filterArray = function (callback, thisArg) {
    let newArr = [];
    for (let i = 0; i < this.length; i++) {
      if (callback.call(thisArg, this[i], i, this)) newArr.push(this[i]);
    }
    return newArr;
}
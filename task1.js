Array.prototype.filterArray = function (cb, thisArg) {
  let filteredArray = [];
  this.forEach(function (element, index, array) {
    if (cb.call(thisArg, element, index, array)) {
      filteredArray.push(element);
    }
  });
  return filteredArray;
};

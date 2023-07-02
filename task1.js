Array.prototype.filterArray = function (cb, thisArg) {
  if (typeof cb !== 'function') {
    throw TypeError(`${cb} is not a function`);
  }

  let callback = cb;
  if (thisArg) {
    callback = callback.bind(thisArg);
  }

  const arr = [...this];
  const arrLength = arr.length;
  const filteredArr = [];
  for (let i = 0; i < arrLength; i++) {
    const item = arr[i];
    if (callback(item, i, arr)) {
      filteredArr.push(item);
    }
  }
  return filteredArr;
};
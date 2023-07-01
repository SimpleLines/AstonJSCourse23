const deepCopyObject = (obj) => {
  let copyObj = {};
  if (Array.isArray(obj)) {
    let arrCopy = [];
    obj.forEach((el, index) => {
      arrCopy[index] = deepCopyObject(el);
    });
    return arrCopy;
  }
  if (obj === null || typeof obj !== 'object' || typeof obj === 'function')
    return obj;
  Object.entries(obj).forEach(([key, value]) => {
    copyObj[key] = deepCopyObject(value);
  });
  return copyObj;
};

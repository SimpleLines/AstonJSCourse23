const deepCopyObject = (obj) => {
  if (obj == null || typeof obj !== 'object') {
    return obj;
  }
  let copy = {};
  if (obj instanceof Array) {
    copy = new Array(obj.length);
  }
  for (let key in obj) {
    copy[key] = deepCopyObject(obj[key]);
  }
  return copy;
};

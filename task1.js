const deepCopyObject = (obj) => {
  if (!obj) {
    return null;
  }

  const cloneObj = Array.isArray(obj) ? obj.map(deepCopyObject) : {};
  for (let key in obj) {
    if (typeof obj[key] === 'object') {
      cloneObj[key] = deepCopyObject(obj[key]);
    } else {
      cloneObj[key] = obj[key];
    }

  }

  return cloneObj;
}

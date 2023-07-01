function deepCopyObject(obj) {
  let clonedObj = {};

  const objKeys = Object.keys(obj);
  for (let key of objKeys) {
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      clonedObj[key] = deepCopyObject(obj[key]);
    } else {
      clonedObj[key] = obj[key];
    }
  }
  return clonedObj;
}
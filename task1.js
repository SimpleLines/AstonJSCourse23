const deepCopyObject = (obj) => {
  if (!obj) return null;
  const clone = Array.isArray(obj) ? obj.map(deepCopyObject) : {};

  for (let key in obj) {
    if (typeof obj[key] === 'object') clone[key] = deepCopyObject(obj[key]);
    else clone[key] = obj[key];
  }

  return clone;
}

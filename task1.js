function deepCopyObject(obj) {
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }

  const newObj = Array.isArray(obj) ? [] : {};

  for (const key in obj) {
    newObj[key] = deepCopyObject(obj[key]);
  }

  return newObj;
}
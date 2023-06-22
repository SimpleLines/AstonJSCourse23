function deepCopyObject(obj) {
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }

  const copy = Array.isArray(obj) ? [] : {};

  for (let key in obj) {
      copy[key] = deepCopyObject(obj[key]);
  }

  return copy;
}
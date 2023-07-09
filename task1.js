// задача 1
function deepCopyObject(obj) {
  let copy = Array.isArray(obj) ? [] : {};

  for (let key in obj) {
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      copy[key] = deepCopyObject(obj[key]);
    } else {
      copy[key] = obj[key];
    }
  }
  return copy;
}

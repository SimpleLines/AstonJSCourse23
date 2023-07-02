const isArray = (v) => Array.isArray(v);
const isObject = (v) => typeof v === "object";

function deepCopyObject(obj) {
  const copiedObj = Object.assign({}, obj);
  for (let key in copiedObj) {
    copiedObj[key] = isObject(obj[key]) ? deepCopyObject(obj[key]) : obj[key];
  }
  if (isArray(obj)) {
    copiedObj.length = obj.length;
    return Array.from(copiedObj);
  }
  return copiedObj;
}
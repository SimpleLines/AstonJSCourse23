const deepCopyObject = (obj) => {
  const newObj = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (typeof obj[key] === "object" && obj[key] !== null) {
        if (obj[key] instanceof Array) {
          newObj[key] = obj[key].slice();
        } else if (obj[key] instanceof Date) {
          newObj[key] = new Date(obj[key]);
        } else {
          newObj[key] = deepCopyObject(obj[key]);
        }
      } else newObj[key] = obj[key];
    }
  }
  return newObj;
};

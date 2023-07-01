const deepCopyObject = (obj) => {
  if (typeof obj === 'object' && obj !== null) {
    if (Array.isArray(obj)) {
      const newArr = [];
      for (let i = 0; i < obj.length; i++) {
        newArr.push(deepCopyObject(obj[i]))
      }
      return newArr;
    } else {
      const newObj = {};
      for (const key in obj) {
        newObj[key] = deepCopyObject(obj[key])
      }
      return newObj;
    }
  } else {
    return obj;
  }
};
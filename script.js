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

const getInterval = (arr, from, to) => {
  if (!Number.isFinite(from)) {
    throw Error(`Параметр ${from} должен быть числом`);
  }
  if (!Number.isFinite(to)) {
    throw Error(`Параметр ${to} должен быть числом`);
  }
  arr.forEach((el) => {
    if (!Number.isFinite(el)) {
      throw Error(`Параметр arr должен содержать только числовые значения`);
    }
  });
  return from < to
    ? arr.filter((el) => el >= from && el <= to)
    : arr.filter((el) => el >= to && el <= from);
};

const getUniqArray = (arr) => {
  return Array.from(new Set(arr));
};

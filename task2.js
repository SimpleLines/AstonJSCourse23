const validIndex = (index) => index > 0 && !`${index}`.includes(",");

function addElementsToArray(arr, index) {
  if (index && !validIndex(index)) throw new Error("the index cannot be a negative number or a fractional number");
  const helper = (...args) => {
    if (!index) return [...arr, ...args];
    const result = [];
    arr.map((el, i) => {
      if (i === index) result.push(...args);
      result.push(el);
    });
    return result;
  };
  return helper;
}
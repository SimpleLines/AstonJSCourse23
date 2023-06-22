function curry(f) {
  return function (arr, index) {
    return function (elem1, elem2, ...elemN) {
      return f(arr, index, elem1, elem2, ...elemN);
    };
  };
}

function getArrIndex(arr, index, elem1, elem2, ...elemN) {
  if (index !== undefined) {
    if (index % 1 !== 0 || index < 0) {
      throw new Error(
        "the index cannot be a negative number or a fractional number"
      );
    }
    return [
      ...arr.slice(0, index),
      elem1,
      elem2,
      ...elemN,
      ...arr.slice(index),
    ];
  }

  return [...arr, elem1, elem2, ...elemN];
}

let addElementsToArray = curry(getArrIndex);

console.log(addElementsToArray([10, 80, 90, 30])(100, 200));

// function addElementsToArray(arr, index)(elem1, elem2, ...elemN) {

// }

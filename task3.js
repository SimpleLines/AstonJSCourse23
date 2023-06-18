function getUniqArray(arr) {
  return Array.from(new Set(arr)); // Самый простой способ
}

function getUniqArray2(arr) {
  const result = [];
  arr.map((el) => {
    if (result.indexOf(el) === -1) result.push(el);
  });
  return result;
} // без использование Set
function getUniqArray(arr) {
  let uniqueNums = new Set(arr);
  
  return Array.from(uniqueNums);
}
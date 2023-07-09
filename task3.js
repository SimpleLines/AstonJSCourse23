function getUniqArray(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('arr должен быть массивом чисел');
  }

  return [...new Set(arr)];
}
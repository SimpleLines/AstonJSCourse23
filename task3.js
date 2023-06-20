function getUniqArray(arr) {
  const unique = new Set(arr);
  return Array.from(unique);
}
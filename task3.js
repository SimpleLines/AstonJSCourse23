function getUniqArray(arr) {
  if (
    !Array.isArray(arr) ||
    arr.some((el) => Number.isNaN(el) || typeof el !== 'number')
  )
    throw new Error(
      'В функцию getUniqArray были переданы невалидные параметры. Параметр arr должен содержать только числовые значения.'
    );
  return Array.from(new Set(arr));
}

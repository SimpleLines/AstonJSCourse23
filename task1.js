function sum(a, b) {
  if (isNaN(a) || isNaN(b)) {
    return;
  }

  const checkIfValidType = (type) => {
    const validTypes = ['string', 'number'];
    return validTypes.includes(type);
  };
  if (!checkIfValidType(typeof a) || !checkIfValidType(typeof b)) {
    return;
  }

  return +(+a + +b).toFixed(3);
}
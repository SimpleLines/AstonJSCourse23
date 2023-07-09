const sum = (a, b) => {
  return !isNaN(a, b)
    ? +(Number(a) + Number(b)).toFixed(3)
    : "Не верный тип данных";
};

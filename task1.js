function sum(a, b){
  if (typeof a === 'boolean' || typeof b === 'boolean' || a === null || b === null) {
    throw TypeError('Не правильные по типу аргументы');
  }
  let argA = +a;
  let argB = +b;
  if(isNaN(argA) || isNaN(argB) || !isFinite(argA) || !isFinite(argB)) {
    throw TypeError('Не правильные по типу аргументы');
  }
  let sumAandB = argA + argB;
  sumAandB = +sumAandB.toFixed(3);  
  return sumAandB;
}
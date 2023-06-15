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

let oneSum = sum(1, 2);// получаем 3
let twoSum = sum(0.6, 0.7);// получаем 1.3
let threeSum = sum(0.1, 0.2);// получаем 0.3
console.log(oneSum, twoSum, threeSum);
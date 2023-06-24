// Первая задача
const sum = (num1, num2)=>{
  if(isNaN(num1)|| isNaN(num2)){
    throw Error("Переданы некорректные данные");
  }else{
    result = +num1 + +num2
    return +result.toFixed(3)
  }
}
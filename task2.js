function getInterval(arr, from, to){
  let toFrom = from;
  let fromTo = to;
  let newArr = arr;
  if(typeof from !== 'number'){
    throw Error('В функцию getInterval были переданы невалидные параметры. Параметр from должен быть числом');
  }
  if(typeof to !== 'number'){
    throw Error('В функцию getInterval были переданы невалидные параметры. Параметр to должен быть числом');
  }
  if(from > to) {
    from = fromTo;
    to = toFrom;
  }
  return newArr.filter(function(item){
    if(typeof item !== 'number'){
      throw Error('В функцию getInterval были переданы невалидные параметры. Параметр arr должен содержать только числовые значения');
    }
    return item >= from && item <= to;
  })
}
let oneGetInterval = getInterval([10,40,5,15,25], 5, 20) // [10,5,15]
let twoGetInterval = getInterval([10,40,5,15,25], 20, 5) // [10,5,15]
// let threeGetInterval = getInterval([1,2,3,4,'hello'], 2, 4) // ошибка

console.log(oneGetInterval, twoGetInterval);
const addElementsToArray = (arr, index) => (...args) => {
  let array = arr;
  if(index && index % 1 !== 0 || index <= 0){
    throw Error('the index cannot be a negative number or a fractional number');
  } else if(index < arr.length && index && typeof index === 'number'){
    let startArr = array.slice(0, index);
    let endArr = array.slice(index, array[array.length - 1]);
    for(let i = 0; i < args.length; i +=1 ){
      startArr.push(args[i]);
    }
    return startArr.concat(endArr);
  } else {
    return array.concat(args);
  }  
}

let oneAddElementsToArray = addElementsToArray([10, 80, 90, 30])(100, 200) // [ 10, 80, 90, 30, 100, 200 ]
let twoAddElementsToArray = addElementsToArray([10, 80, 90, 30], 2)(100, 200) // [ 10, 80, 100, 200, 90, 30 ]
let threeAddElementsToArray = addElementsToArray([10, 80, 90, 30], 50)(100, 200) // [ 10, 80, 90, 30, 100, 200 ]
// let fourAddElementsToArray = addElementsToArray([10, 80, 90, 30], -2)(100, 200) // ошибка
// let fiveAddElementsToArray = addElementsToArray([10, 80, 90, 30], 2.5)(100, 200) // ошибка

console.log(oneAddElementsToArray, twoAddElementsToArray, threeAddElementsToArray);
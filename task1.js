function deleteElementFromArray(arr, elem){
  if(!arr.includes(elem)){
    return arr;
  }
  let deleteIndex = arr.findIndex(function(item){
    return item === elem;
  });
  return arr.filter(function(item, index){
    return index !== deleteIndex;
  });
}

let oneDeleteElementFromArray = deleteElementFromArray([ 10, 80, 90, 30 ], 90) // [ 10, 80, 30 ]
let twoDeleteElementFromArray = deleteElementFromArray([ 10, 80, 90, 30 ], 100) // [ 10, 80, 90, 30 ]

console.log(oneDeleteElementFromArray, twoDeleteElementFromArray);
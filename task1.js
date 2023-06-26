const arr = [10, 15, 20, 25, 40, 45, 50];

const cb = function(item) {
  return item >= this.min && item <= this.max;
}

Array.prototype.filterArray = function(cb, thisArg) {
  if(thisArg){
    let arrayThisArg = []; 
    for(let i = 0; i < this.length; i += 1){
      if(cb.call(thisArg, this[i])){
        arrayThisArg.push(this[i]);
      }    
    }
    return arrayThisArg;
  } 
  let array = [];
  for(let i = 0; i < this.length; i += 1){
    if(cb(this[i])){
      array.push(this[i]);
    }    
  }
  return array;
}

let oneFilterArray = arr.filterArray((item) => item % 2);  //[ 15, 25, 45 ]
let twoFilterArray = arr.filterArray(cb, {min: 20, max: 40}); // [ 20, 25, 40 ]
console.log(oneFilterArray, twoFilterArray);
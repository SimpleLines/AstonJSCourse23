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
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
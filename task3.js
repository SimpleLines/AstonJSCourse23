function getUniqArray(arr){
  let newArr = arr;
  let array = [];
  for(let i = 0; i < newArr.length; i += 1){
    if(typeof newArr[i] !== 'number'){
      throw Error('Входящий массив состоит не только из чисел')
    }
    if(!array.includes(newArr[i])){
      array.push(newArr[i]);
    }
  }
  return array;
}
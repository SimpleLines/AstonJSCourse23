function getUniqArray(arr){
  let newArr = arr;
  let array = [];
  // let set = [...new Set(newArr)];
	// return set;
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
let oneGetUniqArray = getUniqArray([10,20,5,10,20]); // [10,20,5]
console.log(oneGetUniqArray);
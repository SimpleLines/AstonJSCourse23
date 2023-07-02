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
function deepCopyObject(obj){
  let copyObj = {};
  for(let key in obj){
    if(typeof obj[key] === 'obj'){
      deepCopyObject(obj[key]);
    }
    copyObj[key] = obj[key];
  }
  return copyObj;
}
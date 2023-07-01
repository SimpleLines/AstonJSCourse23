const addElementsToArray  =(arr, index)=>(...rest)=>{
     newArr = [...arr]
     if(index === undefined||arr.length <= index){
         newArr.push(...rest)
         return newArr
     }
     else if(index < 0 ||!Number.isInteger(index)){
         throw Error('the index cannot be a negative number or a fractional number')
     }
     else{
         newArr.splice(index ,0, ...rest)
         return newArr 
     }
     
     
 }
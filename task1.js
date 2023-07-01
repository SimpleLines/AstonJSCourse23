function deleteElementFromArray(arr, elem){
    if(arr.includes(elem)){
         let newArr = [...arr]
         newArr.splice(arr.indexOf(elem), 1)
         return newArr
         
    }else{
     return arr
    }
 }
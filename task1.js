function deleteElementFromArray(arr, elem) {
    const newArr = arr.slice(0);
    
    let elemIndex = arr.indexOf(elem);
    if (elemIndex !== -1) {
        newArr.splice(elemIndex, 1);
    }
   
    return newArr;
}



const addElementsToArray = (arr, index) => (...elem) => {
    if(!Number.isInteger(index) ||  index < 1){
        throw new Error('the index cannot be a negative number or a fractional number')
    }
    if(index >= arr.length){
       const mixedArray = [...arr, ...elem]
       return mixedArray;
    } else {
        const mixedArray = [...arr.slice(0, index), ...elem, ...arr.slice(index)]
        return mixedArray;
    }
}
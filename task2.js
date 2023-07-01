const addElementsToArray = (arr, index) => (...args)=>{
    let start = arr.slice(0,index)
    let end = arr.slice(index, arr.length)
    Array.from(args)
    if(index && (index < 0 || !Number.isInteger(index))){
        throw new Error('the index cannot be a negative number or a fractional number')
    }
    return index < arr.length ? (start.concat(args)).concat(end) : arr.concat(args)
}

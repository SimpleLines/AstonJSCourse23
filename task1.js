function deleteElementFromArray(arr, elem){
    let deletElem = arr.indexOf(elem)
    let start = arr.slice(0,deletElem)
    let end = arr.slice(deletElem+1, arr.length)
    return deletElem > -1 ? start.concat(end) : arr
}

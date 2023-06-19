function deepCopyObject(obj){
    if (typeof obj !== 'object' || obj === null){
        return obj
    }
    let copyObject = Array.isArray(obj) ? [] : {}
    for(let key in obj){
        copyObject[key] = deepCopyObject(obj[key])
}
    return copyObject
}



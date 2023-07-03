const checkArrsNum = (array, functionName) => {
    for (let el of array) {
        if (isNaN(el)) {
            throw new Error(`В функции ${functionName}Одно из значений не число`);
        }
    }
}


function deepCopyObject(obj) {
    const clone = {}
    for(let i in obj){
        if(obj[i] instanceof Object){
            clone[i] = deepCopyObject(obj[i])
            continue;
        }
        clone[i] = obj[i];
    }
    return clone;
}
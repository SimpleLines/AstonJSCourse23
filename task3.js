//Задача 1.

function deleteElementFromArray(arr, elem) {
    const indxElem = arr.indexOf(elem);
    if(indxElem){
        const slicesArr = [...arr.slice(0, indxElem), ...arr.slice(indxElem + 1)];
        return slicesArr;
    } else {
        return arr;
    }
}

deleteElementFromArray([ 10, 80, 90, 30, 90 ], 90); 
deleteElementFromArray([ 10, 80, 90, 30 ], 100) ;

//Задача 2.

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

addElementsToArray([10, 80, 90, 30])(100, 200);
addElementsToArray([10, 80, 90, 30], 2)(100, 200);
addElementsToArray([10, 80, 90, 30], 50)(100, 200);
addElementsToArray([10, 80, 90, 30], -2)(100, 200);
addElementsToArray([10, 80, 90, 30], 2.5)(100, 200);
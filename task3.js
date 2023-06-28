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

function addElementsToArray(arr, index, ...elem) {

}
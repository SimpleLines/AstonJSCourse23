function deleteElementFromArray(arr, elem) {
    const indxElem = arr.indexOf(elem);
    if(indxElem){
        const slicesArr = [...arr.slice(0, indxElem), ...arr.slice(indxElem + 1)];
        return slicesArr;
    } else {
        return arr;
    }
}
function deleteElementFromArray(arr, elem) {
    if (!Array.isArray(arr)) {
        throw new Error('Параметр arr должен быть массивом');
    }
    
    const index = arr.indexOf(elem);

    if (index === -1) {
        return arr.slice();  
    }

    const newArr = arr.slice();
    newArr.splice(index, 1);
    return newArr;
}

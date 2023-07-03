const checkArrsNum = (array, functionName) => {
    for (let el of array) {
        if (isNaN(el)) {
            throw new Error(`В функции ${functionName}Одно из значений не число`);
        }
    }
}

function getInterval(arr, from, to) {

    if (isNaN(from)) {
        throw new Error('В функцию getInterval были переданы невалидные параметры. Параметр from должен быть числом')
    } else if (isNaN(to)) {
        throw new Error('В функцию getInterval были переданы невалидные параметры. Параметр to должен быть числом')
    }
    checkArrsNum(arr, 'getInterval');
    const filteredArr = arr.filter((el) => from > to ? el <= from && el >= to : el >= from && el <= to)
    return filteredArr;
}

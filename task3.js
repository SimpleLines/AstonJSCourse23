const checkArrsNum = (array, functionName) => {
    for (let el of array) {
        if (isNaN(el)) {
            throw new Error(`В функции ${functionName}Одно из значений не число`);
        }
    }
}

function getUniqArray(arr) {
    if (typeof arr === 'undefined') {
        throw new Error('Функция getUniqArray, нет аргумента');
    }
    if (arr.length <= 0) {
        throw new Error('Функция getUniqArray, пустой массив');
    }
    checkArrsNum(arr, 'getUniqArray');
    const result = [...new Set(arr)];
    return result;
}
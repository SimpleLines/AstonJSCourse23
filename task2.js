function addElementsToArray(arr, index=0) {
    if (!Array.isArray(arr)) {
        throw new Error('Параметр arr должен быть массивом');
    }

    if (typeof index !== 'undefined' && (!Number.isInteger(index) || index < 0)) {
        throw new Error('the index cannot be a negative number or a fractional number');
    }

    const elements = Array.prototype.slice.call(arguments, 2);
    const newArr = arr.slice();

    if (typeof index === 'undefined' || index >= newArr.length) {
        newArr.push(...elements);
    } else {  
        newArr.splice(index, 0, ...elements);
    }

    return newArr;
}


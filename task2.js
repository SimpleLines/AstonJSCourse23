const addElementsToArray = (arr, index = 0) => (...elems) => {
    let newArr = arr.slice(0);

    if (index == 0 || index >= arr.length) {
        newArr.push(...elems)
    } else if (index > 0 && index % 2 == 0) {
        newArr.splice(index, 0, ...elems)
    } else {
        throw new Error('the index cannot be a negative number or a fractional number.')
    }

    return newArr;
}



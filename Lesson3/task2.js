const addElementsToArray = (arr, index) => (...elems) => {
    let newArr = [];

    if (index > arr.length || typeof index == "undefined") {
        newArr = [...arr, ...elems];
        return newArr;
    }

    if (!Number.isInteger(index) || index < 0)
        return `the index cannot be a negative number or a fractional number`;

    else {
        newArr = [...arr.slice(0, index), ...elems, ...arr.slice(index)];
        return newArr;
    }
}




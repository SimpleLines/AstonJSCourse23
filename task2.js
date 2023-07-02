const addElementsToArray = (arr, index) => (...rest) => {
    if (index !== undefined && (!Number.isInteger(index) || index < 0)) {
        throw new Error("the index cannot be a negative number or a fractional number")
    }
    if (index === undefined || index >= arr.length) {
        return [...arr, ...rest]
    }
    return [...arr.slice(0, index), ...rest, ...arr.slice(index)]
}

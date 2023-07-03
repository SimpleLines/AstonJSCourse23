const addElementsToArray = (arr, index) => (...arguments) => {
    if (!index || index > arr.length) {
        index = arr.length;
    } else if (index < 0 || !Number.isInteger(index)) {
        throw new Error(
            "the index cannot be a negative number or a fractional number"
        );
    }
    let args = Array.from(arguments)
    return arr.slice(0, index).concat(args, arr.slice(index));
}

function getUniqArray(arr) {
    return arr.filter((el, i, arr) => arr.indexOf(el) === i)
}
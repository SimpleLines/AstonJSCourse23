function getUniqArray(arr) {
    const newArr = [...new Set([...arr])];
    return newArr
}
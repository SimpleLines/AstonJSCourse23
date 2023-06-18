function getUniqArray(arr) {
    const uniqueNums = new Set(arr);
    return Array.from(uniqueNums);
}
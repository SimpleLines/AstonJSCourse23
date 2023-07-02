const deleteElementFromArray = (arr, elem) => {
    let foundElem = false
    return arr.filter((el) => {
        if (el === elem && !foundElem) {
            foundElem = true
            return false
        }
        return true
    })
}

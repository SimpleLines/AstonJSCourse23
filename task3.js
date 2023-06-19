const getUniqArray = (arr) => {
    const resultArray = []
    arr.forEach((el) => {
        if (!resultArray.includes(el)) {
            resultArray.push(el)
        }
    })
    return resultArray
}

const deepCopyObject = (obj) => {
    if (typeof obj !== 'object' || obj === null) {
        return obj
    }
    const copy = Array.isArray(obj) ? [] : {}
    Object.keys(obj).forEach((key) => {
        copy[key] = deepCopyObject(obj[key])
    })
    return copy
}

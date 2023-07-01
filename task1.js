function isPrimitive(obj) {
    return obj == null ||
        typeof obj === 'number' ||
        typeof obj === 'string' ||
        typeof obj === 'boolean'
}

function deepCopyObject(obj) {
    if (isPrimitive(obj)) {
        return obj
    } else if (Array.isArray(obj)) {
        return obj.map((val) => {
            return deepCopyObject(val)
        })
    } else if (obj != null && typeof obj === 'object') {
        let res = {}
        for (let k in obj) {
            res[k] = deepCopyObject(obj[k])
        }
        return res
    }
}



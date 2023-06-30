Array.prototype.filterArray = function (cb, thisArg) {
    if (typeof cb !== 'function') throw new Error('Callback is not a function')

    let filteredArray = [];
    let len = this.length
    for (let i = 0; i < len; i++) {
        if (i in this) {
            let value = this[i]
            let check = cb.call(thisArg, this[i], i, this)
            if (check) filteredArray.push(value)
        }

    }
    return filteredArray
}
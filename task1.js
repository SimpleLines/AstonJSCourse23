Array.prototype.filterArray = function (cb, thisArg) {
    if (this == undefined) {
        throw new Error('underfind dont iterate');
    }
    if (this == null) {
        throw new Error('null dont iterate');
    }
    if (typeof cb !== 'function') {
        throw new Error('callback is not a function');
    }

    let context = this;

    if (arguments.length > 1) {
        context = thisArg;
    }

    let obj = Object(this);
    let len = obj.length;
    let res = [];

    for (let i = 0; i < len; i++) {
        if (i in obj) {
            let current = this[i];
            if (cb.call(context, current, obj)) {
                res.push(current);
            }
        }
    }
    return res;
}
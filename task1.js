function deepCopyObject(obj) {
    if (typeof obj !== 'object' || obj === null) {
        return obj;
    }

    if(Array.isArray(obj)) {
        return obj.map((el) => deepCopyObject(el));
    }

    if(obj instanceof Object) {
        let copy = {};
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                copy[key] = deepCopyObject(obj[key]);
            }
        }
        return copy;
    }
}
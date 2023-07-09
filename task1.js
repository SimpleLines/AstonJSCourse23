import staff from "./exampleCopyObject";

function deepCopyObject(obj) {  
    if (typeof obj !== 'object' || obj === null) {
        return obj;
    }
  
    if (Array.isArray(obj)) {
        return obj.map(deepCopyObject);
    }
  
    const newObj = {};
  
    for (let key in obj) {
        newObj[key] = deepCopyObject(obj[key]);
    }
  
    return newObj;
}

deepCopyObject(staff);
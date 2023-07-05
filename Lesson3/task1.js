function deleteElementFromArray(arr, elem) {
    if (!arr.includes(elem)) {
        return arr;
    } else {
        let findIndexElem = arr.indexOf(elem);
        let newArr = arr.filter((item, index) => index !== findIndexElem);
        return newArr;
    }
    
}



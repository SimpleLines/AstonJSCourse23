function deleteElementFromArray(arr, elem) {
    if(!arr.includes(elem)) {
        return arr;
    } else {
        let elemToDelete = arr.indexOf(elem);

        return arr.filter(function (item, index) {
            return index !== elemToDelete;
        });
    }
}
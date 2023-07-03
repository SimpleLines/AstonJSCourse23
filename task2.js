const validateArr = function (arr) {
    let validArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number') {
            validArr.push(arr[i]);
        } else {
            throw new Error('В функцию getInterval были переданы невалидные параметры. Параметр arr должен содержать только числовые значения.');
        }
    } 
    return validArr;
};

function getInterval(arr, from, to) {
    let validArr = validateArr(arr);
    if (typeof from !== 'number') {
        throw Error('В функцию getInterval были переданы невалидные параметры. Параметр from должен быть числом.');
    }
    if (typeof to !== 'number') {
        throw Error('В функцию getInterval были переданы невалидные параметры. Параметр to должен быть числом');
    }
    if (from < to) {
        return validArr.splice(from, to);
    }
    if (from > to) {
        [from, to] = [from, to];
        return validArr.filter(item => item <= from && item >= to);
    }
}
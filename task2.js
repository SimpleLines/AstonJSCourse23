function getInterval(arr, interval1, interval2) {
    let check = arr.every((el) => typeof el === 'number' && !isNaN(el))
    if(!check) {
        throw new Error("В функцию getInterval были переданы невалидные параметры. Параметр arr должен содержать только числовые значения.");
    }

    if(typeof interval1 !== 'number' || isNaN(interval1)) {
        throw new Error('В функцию getInterval были переданы невалидные параметры. Параметр from должен быть числом.');
    }
    if(typeof interval2 !== 'number' || isNaN(interval2)) {
        throw new Error('В функцию getInterval были переданы невалидные параметры. Параметр to должен быть числом.');
    }

    let res = [];
    const max = Math.max(interval1, interval2);
    const min = Math.min(interval1, interval2);

    for(let i = 0; i < arr.length; i++) {
        let currEl = arr[i];
        if(currEl >= min && currEl <= max) {
            res.push(currEl);
        }
    }

    return res;
}
function getInterval(arr, from, to) {
    if (arr.lengs == 0 || arr.some(item => typeof item !== 'number')) {
        return 'В функцию getInterval были переданы невалидные параметры. Параметр arr должен содержать только числовые значения';
    }

    if (typeof from !== 'number') {
        return 'В функцию getInterval были переданы невалидные параметры. Параметр from должен быть числом';
    }

    if (typeof to !== 'number') {
        return 'В функцию getInterval были переданы невалидные параметры. Параметр to должен быть числом';
    }

    if (from > to) {
        [from, to] = [to, from];
    }

    let getNewArr = arr.filter(item => item >= from && item <= to);

    return `${getNewArr}`;
}









const getInterval = (arr, from, to) => {
    if (arr.some(el => typeof el !== 'number')) {
        throw new Error("В функцию getInterval были переданы невалидные параметры. Параметр arr должен содержать только числовые значения")
    }
    if (typeof from !== 'number') {
        throw new Error("В функцию getInterval были переданы невалидные параметры. Параметр from должен быть числом")
    }
    if (typeof to !== 'number') {
        throw new Error("В функцию getInterval были переданы невалидные параметры. Параметр to должен быть числом")
    }
    return arr.filter((el) => {
        if (from < to) {
            return el >= from && el <= to
        } else {
            return el <= from && el >= to
        }
    })
}







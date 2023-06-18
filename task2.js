function getInterval(arr, from, to) {

    if (typeof from !== 'number') throw new Error('В функцию getInterval были переданы невалидные параметры.' +
        'Параметр from должен быть числом.')
    if (typeof to !== 'number') throw new Error('В функцию getInterval были переданы невалидные параметры.' +
        'Параметр to должен быть числом.')

    const newArr = [];

    if (from > to) {
        [from, to] = [to, from]
    }

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] == 'number') {
            let checkInterval = arr[i] >= from && arr[i] <= to;
            if (checkInterval) newArr.push(arr[i])
        } else {
            throw new Error('В функцию getInterval были переданы невалидные параметры. Параметр arr ' +
                'должен содержать только числовые значения.')
        }
    }

    return newArr;
}


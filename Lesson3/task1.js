/*
Задача 1.
Написать функцию deleteElementFromArray(arr, elem). На вход функция
deleteElementFromArray должна принимать массив arr и элемент elem. Если
элемент elem не был найден в массиве, тогда функция должна вернуть тот же
массив arr без изменений. Если в массиве arr был найден элемент, который равен
elem, тогда функция должна вернуть новый массив, у которого удален elem. Если в
массиве arr найдено несколько элементов, равных elem, тогда должен удалиться
только один элемент, который был найден первым. Функция не должна
мутировать массив arr.
➢ Пример:
deleteElementFromArray([ 10, 80, 90, 30 ], 90) // [ 10, 80, 30 ]
deleteElementFromArray([ 10, 80, 90, 30 ], 100) // [ 10, 80, 90, 30 ]
*/

function deleteElementFromArray(arr, elem) {
    if (!arr.includes(elem)) {
        return arr;
    } else {
        let findIndexElem = arr.indexOf(elem);
        let newArr = arr.filter((item, index) => index !== findIndexElem);
        return newArr;
    }
    
}



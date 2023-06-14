// Задача 1.
// Написать функцию sum(a, b), которая на вход принимает два аргумента a и b.
// Результатом выполнения функции должно быть число, представляющее собой
// сумму этих аргументов. Аргументы функции должны быть числами и могут быть
// представлены как в числовом, так и в строковом представлении. Результатом
// выполнения функции должно быть число, округленное до 3 знаков после запятой.
// Здесь есть "подводные камни".
// ➢ Примеры:
// Вызываем sum(1, 2), получаем 3
// Вызываем sum(0.6, 0.7), получаем 1.3
// Вызываем sum(0.1, 0.2), получаем 0.3

const isUndefined = (arg) => typeof arg === 'undefined';
const isString = (arg) => typeof arg === 'string';
const validateAndTransformString = (arg) => {
    const properArg = Number(arg)
    if(isNaN(properArg)) {
        throw new Error('Некорректные данные');
    } 
    return properArg;
}

function sum(a, b) {
    if(isUndefined(a) || isUndefined(b)) {
        throw new Error('Не задано число в первом или втором аргументе')
    } else if (isString(a) || isString(b)){
        return validateAndTransformString(a) + validateAndTransformString(b)
    } else {
        const result = a + b;
        return parseFloat(result.toFixed(3));
    }
}

console.log(sum(1, 2));

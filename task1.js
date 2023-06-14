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
    if (isNaN(properArg)) {
        throw new Error('В функции sum некорректные данные');
    }
    return properArg;
};

function sum(a, b) {
    if (isUndefined(a) || isUndefined(b)) {
        throw new Error('В функции sum не задано число в первом или втором аргументе');
    } else if (isString(a) || isString(b)) {
        const result = validateAndTransformString(a) + validateAndTransformString(b);
        return parseFloat(result.toFixed(3));
    } else {
        const result = a + b;
        return parseFloat(result.toFixed(3));
    }
};

sum('20', 0.403333);

// Задача 2.
// Написать функцию getNumberRadix(number, radix), которая на вход принимает два
// аргумента number и radix, переводит число number в систему счисления radix и
// возвращает число в строковом представлении.
// Number считается корректным, если:
// - является положительным целым числом;
// - является строкой, которую можно перевести в положительное целое число.
// Radix считается корректным, если является числом не меньше 2 и не больше 16.
// Если функция была вызвана с некорректными параметрами, тогда она должны
// выбросить ошибку (throw Error(message)) c сообщением "Функция getNumberRadix
// была вызвана с некорректными параметрами".
// ➢ Примеры:
// Вызываем getNumberRadix(4, 2), получаем "100"
// Вызываем getNumberRadix("16", 8), получаем "20"
// Вызываем getNumberRadix("Hello", 4), получаем ошибку
// Вызываем getNumberRadix(10, 32), получаем ошибку
// Вызываем getNumberRadix(10, "JS"), получаем ошибку
// Подсказка: Используйте метод toString для перевода числа в другую систему
// счисления.

const validateGetNumberRadixParams = (usersNum, usersRadix) => {
    if (isUndefined(usersNum) || isUndefined(usersRadix)) {
        throw new Error('Функция getNumberRadix могла быть вызвана без параметров');
    } else if(isNaN(+usersNum)){
        throw new Error('Функция getNumberRadix, в параметр num было передано не число');
    } else if (+usersNum < 0) {
        throw new Error('Функция getNumberRadix, в параметр num было передано отрицательное число');
    } else if (!Number.isInteger(+usersNum)) {
        throw new Error('Функция getNumberRadix, в параметр num было передано не целое число');
    } else if (isNaN(+usersRadix)) {
        throw new Error('Функция getNumberRadix была вызвана с некорректными параметрами, radix не число');
    } else if (usersRadix < 2 || usersRadix > 16) {
        throw new Error('Функция getNumberRadix вызвана с параметром radix больше 16 или меньше 2');
    }
};

function getNumberRadix(number, radix) {
    validateGetNumberRadixParams(number, radix);

    return Number(number).toString(radix);
};

console.log(getNumberRadix('4', 2));
// Задача 1.
// Написать функцию deepCopyObject(obj) для глубокого копирования объекта.
// Функция должна принимать на вход объект и возвращать его копию. Запрещается
// использовать JSON.stringify() + JSON.parse(), structuredClone() или методы
// библиотек. Пример объекта для копирования взять из файла exampleCopyObject.js.

const staff = {
    name: 'Alex',
    age: 20,
    skills: [
        {
            id: 1,
            value: 'html',
        },
        {
            id: 2,
            value: 'js',
        },
        {
            id: 3,
            value: 'css',
        },
    ],
    cost: undefined,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed ...',
    knowledge: [
        {
            label: 'React JS',
            score: 7,
        },
        {
            label: 'JS',
            score: 7,
        },
        {
            label: 'CSS',
            score: 9,
        },
        {
            label: 'HTML',
            score: 10,
        },
    ],
    avatar: null,
};

function deepCopyObject(obj){

}


function getUniqArray(arr){
    const resultArr = [];
    if(typeof arr === 'undefined'){
        throw new Error('Функция getUniqArray, нет аргумента');
    }
    if(arr.length <=0){
        throw new Error('Функция getUniqArray, пустой массив');
    }
    for(let el of arr) {
        if(isNaN(el)) {
            throw new Error('Функция getUniqArray, одно из значений не число');
        }
    }
    const result = [...new Set(arr)];
    return result;
}

console.log(getUniqArray ([10,20,5,10,20]))
//Helpers
const checkArrsNum = (array, functionName) => {
    for (let el of array) {
        if (isNaN(el)) {
            throw new Error(`В функции ${functionName}Одно из значений не число`);
        }
    }
}

// Задача 1.

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

function deepCopyObject(obj) {
    const clone = {}
    for(let i in obj){
        if(obj[i] instanceof Object){
            clone[i] = deepCopyObject(obj[i])
            continue;
        }
        clone[i] = obj[i];
    }
    return clone;
}

const result = deepCopyObject(staff)
console.log(staff === result)

//Задача 2

function getInterval(arr, from, to) {

    if (isNaN(from)) {
        throw new Error('В функцию getInterval были переданы невалидные параметры. Параметр from должен быть числом')
    } else if (isNaN(to)) {
        throw new Error('В функцию getInterval были переданы невалидные параметры. Параметр to должен быть числом')
    }
    checkArrsNum(arr, 'getInterval');
    const filteredArr = arr.filter((el) => from > to ? el <= from && el >= to : el >= from && el <= to)
    return filteredArr;
}

getInterval([10, 40, 5, 15, 25], 5, 20)
getInterval([10, 40, 5, 15, 25], 20, 5)
getInterval([1, 2, 3, 4, 'hello'], 2, 4)

//Задача 3
function getUniqArray(arr) {
    const resultArr = [];
    if (typeof arr === 'undefined') {
        throw new Error('Функция getUniqArray, нет аргумента');
    }
    if (arr.length <= 0) {
        throw new Error('Функция getUniqArray, пустой массив');
    }
    checkArrsNum(arr, 'getUniqArray');
    const result = [...new Set(arr)];
    return result;
}

getUniqArray([10, 20, 5, 10, 20]);

queueMicrotask()
function getInterval(arr, from, to){
    if(typeof from !== 'number'){
        throw new Error('В функцию getInterval были переданы невалидные параметры. Параметр from должен быть числом')
    }
    if(typeof to !== 'number'){
        throw new Error('В функцию getInterval были переданы невалидные параметры. Параметр to должен быть числом')
    }

    return arr.filter((element)=>{
        if(typeof element !== 'number'){
            throw new Error('В функцию getInterval были переданы невалидные параметры. Параметр arr должен содержать только числовые значения')
        }
        return from < to ? element>=from && element<=to : element<=from && element>=to
    })
}
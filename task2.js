function getInterval(arr, from, to){

    if(typeof from !== 'number'){
        throw Error("В функцию getInterval были переданы невалидные параметры. Параметр from должен быть числом");
    }

    if(typeof to !== 'number'){
        throw Error("В функцию getInterval были переданы невалидные параметры. Параметр to должен быть числом");
    }

    for (let item of arr){
        if(typeof item !== 'number'){
            throw Error("В функцию getInterval были переданы невалидные параметры. Параметр arr должен содержать только числовые значения")
        }
    }

    let array = arr.filter((item)=>{
        if(from > to){
            return item >= to && item <= from
        }else{
            return item >= from && item <= to
        }
    })
    return array
    
}
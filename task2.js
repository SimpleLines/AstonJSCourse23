function getNumberRadix(number, radix){
    let correctNumber = +number
    let correctRadix = +radix
    if 
        (isNaN(correctNumber) ||
        !Number.isInteger(correctNumber) ||
        correctNumber < 0 ||  
        isNaN(correctRadix) || 
        !Number.isInteger(correctRadix) ||
        (correctRadix < 2) || 
        (correctRadix > 16)) {
            throw new Error("Функция getNumberRadix была вызвана с некорректными параметрами")
    }else{
        return correctNumber.toString(correctRadix)
    }
}
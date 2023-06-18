function getNumberRadix(number, radix) {
     const numberCheck = isNaN(number)
     const radixCheck = radix >= 2 && radix <= 16

     if (!radixCheck) throw new Error('Функция getNumberRadix была вызвана с некорректными параметрами.')

     if (numberCheck) {
          throw new Error('Функция getNumberRadix была вызвана с некорректными параметрами.')
     } else {
          return Number(number).toString(radix)
     }

}


function getNumberRadix(number, radix){
	if (typeof number === 'boolean' || number === null || typeof radix !== 'number' || radix < 2 || radix > 16) {
      throw Error('Функция getNumberRadix была вызвана с некорректными параметрами 1');
    }
	let stringNumber = +number;	
	if(stringNumber % 1 !== 0 || isNaN(stringNumber)) {
    throw Error('Функция getNumberRadix была вызвана с некорректными параметрами 2');
  }
	return stringNumber.toString(radix);
}
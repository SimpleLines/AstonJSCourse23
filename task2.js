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

let oneGetNumberRadix = getNumberRadix(4, 2);// получаем "100"
let twoGetNumberRadix = getNumberRadix('16', 8);// получаем "20"
// let threeGetNumberRadix = getNumberRadix('Hello', 4);// получаем ошибку
// let fourGetNumberRadix = getNumberRadix(10, 32);// получаем ошибку
// let fiveGetNumberRadix = getNumberRadix(10, "JS");// получаем ошибку
console.log(oneGetNumberRadix, twoGetNumberRadix);
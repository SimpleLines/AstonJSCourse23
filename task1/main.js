class Car{
    constructor(){
    this.fuel = 0 // объем дополнительного топливного бака;
    this.lowFuelConsumption = 0 // коэффициент оптимизации расхода топлива
    this.durability = 0 // коэффициент прочности автомобиля
    this.speed = 0 // коэффициент увеличения скорости
    this.name = 'Unknown Car'
    }

    getTotalValue(){
      const total = this.fuel + this.lowFuelConsumption + this.durability + this.speed;
      if(total > 12){
        throw Error('Общая сумма очков не должна привышать 12')
      }
      
    }

    getDurability(){
      return 100 + this.durability * 0.1 * 100;
    }

    getPowerReserve(){
      const totalFuel = 5 + this.fuel;
      return totalFuel * 200 + totalFuel * 0,1 * 200 * this.lowFuelConsumption
    }

    getSpeed(){
      return 10 + speed * 0.05 * 10;
    }
}

class CivilianCar extends Car{
    constructor(){
        super();
        this.fuel = 2 // объем дополнительного топливного бака;
        this.lowFuelConsumption = 1 // коэффициент оптимизации расхода топлива
        this.durability = 1 // коэффициент прочности автомобиля
        this.speed = 6 // коэффициент увеличения скорости
    }
}
class SportCar extends Car{
    constructor(){
        super();
        this.fuel = 2 // объем дополнительного топливного бака;
        this.lowFuelConsumption = 1 // коэффициент оптимизации расхода топлива
        this.durability = 1 // коэффициент прочности автомобиля
        this.speed = 6 // коэффициент увеличения скорости
    }
}

class MilitaryCar extends Car{
    constructor(){
        super();
        this.fuel = 2 // объем дополнительного топливного бака;
        this.lowFuelConsumption = 2 // коэффициент оптимизации расхода топлива
        this.durability = 4 // коэффициент прочности автомобиля
        this.speed = 2 // коэффициент увеличения скорости
    }
}
const btnStart = document.querySelector('.btn')
let carType = document.getElementById('carType')
let carNameInput = document.getElementById('carName')
let carFuelInput = document.getElementById('carFuel')
let lowFuelConsumptionInput = document.getElementById('lowFuelConsumption')
let carDurabilityInput = document.getElementById('carDurability')
let speedInput = document.getElementById('speed')
let enemiesInput = document.getElementById('enemies')
let selectCar = {};
let arrRacingCars = [];


carType.addEventListener('change', ()=>{
    const carTypeValue = carType.value;
    selectCar = setCarClass(carTypeValue)
    setCarInitialValue(selectCar)
})
const setCarInitialValue =({fuel, lowFuelConsumption, durability,speed})=>{
  carFuelInput.value = fuel
  lowFuelConsumptionInput.value = lowFuelConsumption
  carDurabilityInput.value = durability
  speedInput.value = speed
}

function setCarClass(selectedType) {
    switch (selectedType) {
      case 'civilian':
        return new CivilianCar();
      case 'sport':
        return new SportCar();
      case 'military':
        return new MilitaryCar();
      default:
        return new Car();
    }
  }

  function createRandomCars(count) {
    const carClasses = [CivilianCar, SportCar, MilitaryCar];
    const cars = [];
  
    for (let i = 0; i < count; i++) {
      const RandomCarClass =
        carClasses[Math.floor(Math.random() * carClasses.length)];
  
      const car = new RandomCarClass();
  
      const characteristics = [
        'fuel',
        'lowFuelConsumption',
        'durability',
        'speed',
      ];
      for (let j = 0; j < 2; j++) {
        const randomCharacteristic =
          characteristics[Math.floor(Math.random() * characteristics.length)];
        car[randomCharacteristic] += 1;
      }
  
      car.name = generateRandomString();
      cars.push(car);
    }
  
    return cars;
  }
  
  function generateRandomString() {
    let result = '';
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
  
    for (let i = 0; i < 5; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
  
    return result;
  }

  function setCarsOfRace() {
    selectCar.getTotalValue()
    randomCars = createRandomCars(enemiesInput.value);
    arrRacingCars = [...randomCars, selectCar];
  }

  function compare(cars) {
    return cars.map((car) => ({
        powerReserve: Math.round((car.getPowerReserve() / Math.max(...cars.map((car) => car.getPowerReserve()))) * 100),
        durability: Math.round((car.getDurability() / Math.max(...cars.map((car) => car.getDurability()))) * 100),
        speed: Math.round((car.getSpeed() / Math.max(...cars.map((car) => car.getSpeed()))) * 100),
        name: car.name,
    }))
}

btnStart.addEventListener('click' , ()=>{
   setCarsOfRace()
   compare(arrRacingCars)
   console.log(arrRacingCars)
   console.log(compare(arrRacingCars))
   
})

  




















const cars = [];

function addCarInCars(car) {
  return cars.push(car);
};

class Car {
  #updateCount = 2; 
  constructor(){
    this.fuel = 0, 
    this.lowFuelConsumption = 0, 
    this.durability = 0, 
    this.speed = 0, 
    this.name = 'Unknown Car',
    addCarInCars(this);
  };
  
  upgradeField(field, operation) {
    if (this.#updateCount > 0 && operation === 'INCREMENT') {
      this[field] += 1;
      this.#updateCount -= 1;
    } else if (this.#updateCount === 0 && operation === 'DECREMENT') {
      this[field] -= 1;
      this.#updateCount += 1;
    } else if (this.#updateCount < 2 && operation === 'DECREMENT') {
      this[field] -= 1;
      this.#updateCount += 1;
    } else if (this.#updateCount === 2 && operation === 'DECREMENT') {
      return null;
    } else {throw new Error('Превышен лимит распределяемых очков')}
  };
};

class Civilian extends Car {
  constructor(name){
    super()
    this.fuel = 2,
    this.lowFuelConsumption = 2,
    this.durability = 2,
    this.speed = 4,
    this.name = name || 'Unknown Car' 
  };
};

class Super extends Car {
  constructor(name){
    super()
    this.fuel = 2,
    this.lowFuelConsumption = 1,
    this.durability = 1,
    this.speed = 6,
    this.name = name || 'Unknown Car' 
  };
};

class Military extends Car {
  constructor(name){
    super()
    this.fuel = 2,
    this.lowFuelConsumption = 2,
    this.durability = 4,
    this.speed = 2,
    this.name = name || 'Unknown Car' 
  };
};

function createRivals(count) {
  const typeCars = [Civilian, Super, Military];
  const paramsCar = ['fuel', 'lowFuelConsumption', 'durability', 'speed'];
  while (count) {
    const indexTypeCar = Math.floor(Math.random() * 3);
    const instance = new typeCars[indexTypeCar](`${count}-Bot`);
    instance.upgradeField(paramsCar[Math.floor(Math.random() * 4)], 'INCREMENT');
    instance.upgradeField(paramsCar[Math.floor(Math.random() * 4)], 'INCREMENT');
    count--;
  };
};

function calculatingPowerReserve(car) {
  return ((5 + car.fuel) * 200) + ((5 + car.fuel) * 0.1 * 200 * car.lowFuelConsumption);
};

function calculatingDurability(car) {
  return 100 + car.durability * 0.1 * 100;
};

function calculatingSpeed(car) {
  return 10 + car.speed * 0.05 * 10;
};

function compare(array) {
  if (!array.length) throw new Error('Массив с автомобилями пуст.');
  const maxPowerReserve = Math.max(...array.map((car) => calculatingPowerReserve(car)));
  const maxDurability = Math.max(...array.map((car) => calculatingDurability(car)));
  const maxSpeed = Math.max(...array.map((car) => calculatingSpeed(car)));
  return array.map((car) => {
    return {
      powerReserve: Math.round(calculatingPowerReserve(car) / maxPowerReserve * 100) + '%',
      durability: Math.round(calculatingDurability(car) / maxDurability * 100) + '%',
      speed: Math.round(calculatingSpeed(car) / maxSpeed * 100) + '%',
      name: car.name, 
    };
  });
};

class Cars {
  constructor(name = 'Unknown Car') {
    this.fuel = 0;
    this.lowFuelConsumption = 0;
    this.durability = 0;
    this.speed = 0;
    this.name = name;
  }

  improve(prop) {
    let sumPoints =
      this.fuel + this.lowFuelConsumption + this.durability + this.speed + 1;
    if (sumPoints > 12) throw new Error('Превышен лимит распределяемых очков');
    return (this[prop] += 1);
  }

  getPowerReserve() {
    const totalFuel = 5 + this.fuel;
    return totalFuel * 200 + totalFuel * 0.1 * 200 * this.lowFuelConsumption;
  }

  getSpeed() {
    return 10 + this.speed * 0.05 * 10;
  }

  getDurability() {
    return 100 + this.durability * 0.1 * 100;
  }
}

function compare(cars) {
  const maxSpeedCars = Math.max(...cars.map((car) => car.getSpeed()));
  const maxPowerReserve = Math.max(...cars.map((car) => car.getPowerReserve()));
  const maxDurability = Math.max(...cars.map((car) => car.getDurability()));
  const comparisonCar = cars.map((car) => ({
    powerReserve:
      Math.round((car.getPowerReserve() / maxPowerReserve) * 100) + '%',
    durability: Math.round((car.getDurability() / maxDurability) * 100) + '%',
    speed: Math.round((car.getSpeed() / maxSpeedCars) * 100) + '%',
    name: car.name,
  }));
  return comparisonCar;
}

class Civian extends Cars {
  constructor(name) {
    super(name);
    this.fuel = 2;
    this.lowFuelConsumption = 2;
    this.durability = 2;
    this.speed = 4;
  }
}

class Sport extends Cars {
  constructor(name) {
    super(name);
    this.fuel = 2;
    this.lowFuelConsumption = 1;
    this.durability = 1;
    this.speed = 6;
  }
}

class Military extends Cars {
  constructor(name) {
    super(name);
    this.fuel = 2;
    this.lowFuelConsumption = 2;
    this.durability = 4;
    this.speed = 2;
  }
}

const arrPropCars = ['fuel', 'lowFuelConsumption', 'durability', 'speed'];
const arrClassCars = [Civian, Sport, Military];
function randomPropEnemy() {
  let randomProp = arrPropCars[Math.floor(Math.random() * arrPropCars.length)];
  return randomProp;
}

function createEnemy(nameEnemy = 'enemyCar') {
  const randomClass =
    arrClassCars[Math.floor(Math.random() * arrClassCars.length)];
  const randomCar = new randomClass(nameEnemy);
  randomCar.improve(randomPropEnemy());
  randomCar.improve(randomPropEnemy());
  return randomCar;
}

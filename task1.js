const SPORT_CAR = 'sport';
const MILITARY_CAR = 'military';
const CIVILIAN_CAR = 'civilian';

const DURABILITY = 'durability';
const LOW_FUEL_CONSUMPTION = 'lowFuelConsumption';
const FUEL = 'fuel';
const SPEED = 'speed';
const POWER_REVERSE = 'powerReverse';

const POINTS_NUM = 2;

class Car {
  #fuel;
  #lowFuelConsumption;
  #durability;
  #speed;

  #points = POINTS_NUM;

  #initFuelValue = 5;
  #initSpeedValue = 10;
  #initDurabilityValue = 100;

  #totalFuel;
  #totalSpeed;
  #totalDurability;
  #powerReverse;

  constructor({ fuel, lowFuelConsumption, durability, speed, name }) {
    this.#fuel = fuel;
    this.#lowFuelConsumption = lowFuelConsumption;
    this.#durability = durability;
    this.#speed = speed;
    this.name = name;

    this.#calcAll();
  }

  improve(param) {
    if (this.#points - 1 < 0) {
      throw Error('Превышен лимит распределяемых очков');
    }

    switch (param) {
      case FUEL:
        this.#fuel += 1;
        this.#calcPowerReverse();
        break;
      case LOW_FUEL_CONSUMPTION:
        this.#lowFuelConsumption += 1;
        this.#calcPowerReverse();
        break;
      case DURABILITY:
        this.#durability += 1;
        this.#calcTotalDurability();
        break;
      case SPEED:
        this.#speed += 1;
        this.#calcTotalSpeed();
        break;
      default:
        return;
    }

    this.#points -= 1;
  }

  get points() {
    return this.#points;
  }

  #calcAll() {
    this.#calcPowerReverse();
    this.#calcTotalSpeed();
    this.#calcTotalDurability();
  }

  #calcTotalFuel() {
    this.#totalFuel = this.#initFuelValue + this.#fuel;
  }

  #calcPowerReverse() {
    this.#calcTotalFuel();
    this.#powerReverse = this.#totalFuel * 200 + this.#totalFuel * 0.1 * 200 * this.#lowFuelConsumption;
  }

  #calcTotalSpeed() {
    this.#totalSpeed = this.#initSpeedValue + this.#speed * 0.05 * this.#initSpeedValue;
  }

  #calcTotalDurability() {
    this.#totalDurability = this.#initDurabilityValue + this.#durability * 0.1 * this.#initDurabilityValue;
  }

  get durability() {
    return this.#totalDurability;
  }

  get powerReverse() {
    return this.#powerReverse;
  }

  get speed() {
    return this.#totalSpeed;
  }

  static compare(cars) {
    const max = {
      [SPEED]: 0,
      [DURABILITY]: 0,
      [POWER_REVERSE]: 0,
    };

    cars.forEach((car) => {
      for (const key in max) {
        if (car[key] > max[key]) {
          max[key] = car[key];
        }
      }
    });

    return cars.map((car) => {
      const carObj = { name: car.name };
      for (const key in max) {
        carObj[key] = getProcent(car[key] / max[key]);
      }
      return carObj;
    });

    function getProcent(num) {
      return Math.floor(num * 100) + '%';
    }
  }
}

class CivilianCar extends Car {
  constructor(name) {
    super({ fuel: 2, lowFuelConsumption: 2, durability: 2, speed: 4, name });
  }
}

class SportCar extends Car {
  constructor(name) {
    super({ fuel: 2, lowFuelConsumption: 1, durability: 1, speed: 6, name });
  }
}

class MilitaryCar extends Car {
  constructor(name) {
    super({ fuel: 2, lowFuelConsumption: 2, durability: 4, speed: 2, name });
  }
}

function carFactory({ type, name }) {
  let Car;
  switch (type) {
    case MILITARY_CAR:
      Car = MilitaryCar;
      break;
    case CIVILIAN_CAR:
      Car = CivilianCar;
      break;
    case SPORT_CAR:
      Car = SportCar;
      break;
    default:
      Car = CivilianCar;
      break;
  }
  return new Car(name);
}

function runGame({ enemiesNumber, playerCarType, playerCarName }) {
  const enemiesCars = [];
  for (let i = 0; i < enemiesNumber; i++) {
    enemiesCars.push(createRandomCar(i));
  }

  const playerCar = carFactory({ type: playerCarType, name: playerCarName });

  return {
    enemiesCars,
    playerCar,
  };
}

function getRandom(min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1));
}

function createRandomCar(index) {
  const carTypes = [SPORT_CAR, CIVILIAN_CAR, MILITARY_CAR];
  const type = getRandomParam(carTypes);
  const name = `Car ${index + 1}`;
  const enemyCar = carFactory({ type, name });
  improveRandomChars(enemyCar);
  return enemyCar;
}

function improveRandomChars(car) {
  const chars = [DURABILITY, LOW_FUEL_CONSUMPTION, SPEED, FUEL];
  for (let i = 0; i < POINTS_NUM; i++) {
    const char = getRandomParam(chars);
    car.improve(char);
  }
}

function getRandomParam(paramsArr) {
  const paramsNum = paramsArr.length;
  const randomNum = getRandom(0, paramsNum - 1);
  return paramsArr[randomNum];
}

const { enemiesCars, playerCar } = runGame({ enemiesNumber: 3, playerCarType: SPORT_CAR, playerCarName: 'Player Car' });
Car.compare([...enemiesCars, playerCar]);

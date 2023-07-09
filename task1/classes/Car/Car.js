import { DURABILITY, FUEL, LOW_FUEL_CONSUMPTION, POINTS_NUM, POWER_REVERSE, SPEED } from '../../core/constants.js';

export class Car {
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

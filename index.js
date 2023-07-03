class Car {
  #fuel;
  #lowFuelConsumption;
  #durability;
  #speed;

  #points = 2;

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
      case 'fuel':
        this.#fuel += 1;
        this.#calcPowerReverse();
        break;
      case 'lowFuelConsumption':
        this.#lowFuelConsumption += 1;
        this.#calcPowerReverse();
        break;
      case 'durability':
        this.#durability += 1;
        this.#calcTotalDurability();
        break;
      case 'speed':
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

const car1 = new SportCar('sport');

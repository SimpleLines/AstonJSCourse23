class Car {
  constructor(fuel, lowFuelConsumption, durability, speed, name) {
    this.fuel = fuel;
    this.lowFuelConsumption = lowFuelConsumption;
    this.durability = durability;
    this.speed = speed;
    this.name = name;
  }

  calculatePowerReserve() {
    const defaultFuel = 5;
    const totalFuel = this.fuel + defaultFuel;
    const powerReserve = totalFuel * 200 + totalFuel * 0.1 * 200 * this.lowFuelConsumption;
    return Math.round(powerReserve * 100) / 100;
  }

  calculateSpeed() {
    const defaultSpeed = 10;
    const totalSpeed = defaultSpeed + this.speed * 0.05 * defaultSpeed;
    return Math.round(totalSpeed * 100) / 100;
  }

  calculateDurability() {
    const defaultDurability = 100;
    const totalDurability = defaultDurability + this.durability * 0.1 * defaultDurability;
    return Math.round(totalDurability * 100) / 100;
  }

  static compare(cars) {
    const maxPowerReserve = Math.max(...cars.map((car) => car.calculatePowerReserve()));
    const maxDurability = Math.max(...cars.map((car) => car.calculateDurability()));
    const maxSpeed = Math.max(...cars.map((car) => car.calculateSpeed()));
    return cars.map((car) => ({
      powerReserve: Math.round(car.calculatePowerReserve() / maxPowerReserve * 100),
      durability: Math.round(car.calculateDurability() / maxDurability * 100),
      speed: Math.round(car.calculateSpeed() / maxSpeed * 100),
      name: car.name,
    }));
  }
}

class CivilianCar extends Car {
  constructor(options = {}) {
    const {fuel = 2, lowFuelConsumption = 2, durability = 2, speed = 4, name = 'Unknown Car'} = options;
    if (fuel + lowFuelConsumption + durability + speed > 12) {
      throw new Error('Превышен лимит распределяемых очков');
    }
    super(fuel, lowFuelConsumption, durability, speed, name);
  }
}

class SportCar extends Car {
  constructor(options = {}) {
    const {fuel = 2, lowFuelConsumption = 1, durability = 1, speed = 6, name = 'Unknown Car'} = options;
    if (fuel + lowFuelConsumption + durability + speed > 12) {
      throw new Error('Превышен лимит распределяемых очков');
    }
    super(fuel, lowFuelConsumption, durability, speed, name);
  }
}

class MilitaryCar extends Car {
  constructor(options = {}) {
    const {fuel = 2, lowFuelConsumption = 2, durability = 4, speed = 4, name = 'Unknown Car'} = options;
    if (fuel + lowFuelConsumption + durability + speed > 12) {
      throw new Error('Превышен лимит распределяемых очков');
    }
    super(fuel, lowFuelConsumption, durability, speed, name);
  }
}

class OpponentCar extends Car {
  constructor() {
    const fuel = Math.floor(Math.random() * 3) + 1;
    const lowFuelConsumption = Math.floor(Math.random() * 3) + 1;
    const durability = Math.floor(Math.random() * 5) + 1;
    const speed = Math.floor(Math.random() * 5) + 1;
    const name = 'Opponent Car';
    if (fuel + lowFuelConsumption + durability + speed > 12) {
      throw new Error('Превышен лимит распределяемых очков');
    }
    super(fuel, lowFuelConsumption, durability, speed, name);
  }
}

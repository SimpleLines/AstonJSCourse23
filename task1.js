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
    const totalFuel = defaultFuel + this.fuel;
    const powerReserve =
      totalFuel * 200 + totalFuel * 0.1 * 200 * this.lowFuelConsumption;
    return Math.round(powerReserve * 100);
  }

  calculateDurability() {
    const baseDurability = 100;
    const totalDurability =
      baseDurability + this.durability * 0.1 * baseDurability;
    return Math.round(totalDurability);
  }

  calculateSpeed() {
    const baseSpeed = 10;
    const totalSpeed = baseSpeed + this.speed * 0.05 * baseSpeed;
    return Math.round(totalSpeed);
  }
}

class CivilianCar extends Car {
  constructor() {
    super(2, 2, 2, 4, "Car 1");
  }
}

class SportCar extends Car {
  constructor() {
    super(2, 1, 1, 6, "Car 2");
  }
}

class MilitaryCar extends Car {
  constructor() {
    super(2, 2, 4, 2, "Car 3");
  }
}

function compare(cars) {
  const maxPowerReserve = Math.max(
    ...cars.map((car) => car.calculatePowerReserve())
  );
  const maxDurability = Math.max(
    ...cars.map((car) => car.calculateDurability())
  );
  const maxSpeed = Math.max(...cars.map((car) => car.calculateSpeed()));

  return cars.map((car) => ({
    powerReserve: Math.round(
      (car.calculatePowerReserve() / maxPowerReserve) * 100
    ),
    durability: Math.round((car.calculateDurability() / maxDurability) * 100),
    speed: Math.round((car.calculateSpeed() / maxSpeed) * 100),
    name: car.name,
  }));
}

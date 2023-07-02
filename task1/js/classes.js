class Car {
  constructor() {
    this.fuel = 0;
    this.lowFuelConsumption = 0;
    this.durability = 0;
    this.speed = 0;
    this.name = 'Unknown Car';
  }

  setFuel(value) {
    this.fuel = value;
  }

  setLowFuelConsumption(value) {
    this.lowFuelConsumption = value;
  }

  setDurability(value) {
    this.durability = value;
  }

  setSpeed(value) {
    this.speed = value;
  }

  setName(name) {
    this.name = name;
  }

  setProperty(fuel, lowFuelConsumption, durability, speed, name) {
    this.setFuel(fuel);
    this.setLowFuelConsumption(lowFuelConsumption);
    this.setDurability(durability);
    this.setSpeed(speed);
    this.setName(name);
  }
}

class CivilianCar extends Car {
  constructor() {
    super();
    this.fuel = 2;
    this.lowFuelConsumption = 2;
    this.durability = 2;
    this.speed = 4;
  }
}

class SportCar extends Car {
  constructor() {
    super();
    this.fuel = 2;
    this.lowFuelConsumption = 1;
    this.durability = 1;
    this.speed = 6;
  }
}

class MilitaryCar extends Car {
  constructor() {
    super();
    this.fuel = 2;
    this.lowFuelConsumption = 2;
    this.durability = 4;
    this.speed = 2;
  }
}

export { Car, CivilianCar, SportCar, MilitaryCar };

export default class Car {
  #defaultFuel = 5;

  constructor(fuel, lowFuelConsumption, durability, speed, name) {
    if (fuel + lowFuelConsumption + durability + speed > 12) {
      throw new Error('Превышен лимит распределяемых очков');
    }
    this.fuel = fuel;
    this.lowFuelConsumption = lowFuelConsumption;
    this.durability = durability;
    this.speed = speed;
    this.name = name;
    this._totalFuel = this.#defaultFuel + this.fuel;
  }



  calculatePowerReserve() {
    return this._totalFuel * 200 + this._totalFuel * 0.1 * 200 * this.lowFuelConsumption;
  }

  calculateTotalDurability() {
    return 100 + this.durability * 0.1 * 100;
  }

  calculateTotalSpeed() {
    return 10 + this.speed * 0.05 * 10;
  }

  static compare(cars) {
    const powerReserveValues = cars.map((car) => car.calculatePowerReserve());
    const maxPowerReserve = Math.max(...powerReserveValues);
    const normalizedPowerReserve = powerReserveValues.map((value) => Math.floor((value / maxPowerReserve) * 100));
    const durabilityValues = cars.map((car) => car.calculateTotalDurability());
    const maxDurability = Math.max(...durabilityValues);
    const normalizedDurability = durabilityValues.map((value) => Math.floor((value / maxDurability) * 100));

    const speedValues = cars.map((car) => car.calculateTotalSpeed());
    const maxSpeed = Math.max(...speedValues);
    const normalizedSpeed = speedValues.map((value) => Math.floor((value / maxSpeed) * 100));

    return cars.map((car, i) => ({
      name: car.name,
      powerReserve: `${normalizedPowerReserve[i]}%`,
      durability: `${normalizedDurability[i]}%`,
      speed: `${normalizedSpeed[i]}%`,
    }));
  }
}
class Car {
  constructor({
    fuel = 0,
    lowFuelConsumption = 0,
    durability = 0,
    speed = 0,
    name = "Unknown Car",
    bonusFuel = 0,
    bonusLowFuelConsumption = 0,
    bonusDurability = 0,
    bonusSpeed = 0,
  }) {
    this.fuel = fuel;
    this.lowFuelConsumption = lowFuelConsumption;
    this.durability = durability;
    this.speed = speed;
    this.name = name;
    this._bonusFuel = bonusFuel;
    this._bonusLowFuelConsumption = bonusLowFuelConsumption;
    this._bonusDurability = bonusDurability;
    this._bonusSpeed = bonusSpeed;
  }

  calculatePowerReserve() {
    const defaultFuel = 5;
    const totalFuel = defaultFuel + this.fuel + this._bonusFuel;
    const powerReserve =
      totalFuel * 200 +
      totalFuel *
        0.1 *
        200 *
        (this.lowFuelConsumption + this._bonusLowFuelConsumption);
    return Math.round(powerReserve);
  }

  calculateDurability() {
    const baseDurability = 100;
    const totalDurability =
      baseDurability +
      (this.durability + this._bonusDurability) * 0.1 * baseDurability;
    return Math.round(totalDurability);
  }

  calculateSpeed() {
    const baseSpeed = 10;
    const totalSpeed =
      baseSpeed + (this.speed + this._bonusSpeed) * 0.05 * baseSpeed;
    return Math.round(totalSpeed);
  }

  compare(cars) {
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
}

export default Car;

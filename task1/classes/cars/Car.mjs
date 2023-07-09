export default class Car {
    constructor(name) {
      this.defaultFuel = 5;
      this.fuel = 0;
      this.totalFuel = this.defaultFuel + this.fuel;
      this.lowFuelConsumption = 0;
      this.durability = 0;
      this.speed = 0;
      this.name = name;
      this.pointsToUpgrade = 2;
      this.won = false;
    }
    totalDistance() {
      let result = this.totalFuel * 200 + this.totalFuel * 0.1 * 200 * this.lowFuelConsumption;
      return result;
    }
    totalSpeed() {
      let result = 10 + this.speed * 0.5 * 10;
      return result;
    }
    totalDurability() {
      let result = 100 + this.durability * 0.1 * 100;
      return result;
    }
  }  
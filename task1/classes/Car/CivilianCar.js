import { Car } from './Car.js';

export class CivilianCar extends Car {
  constructor(name) {
    super({ fuel: 2, lowFuelConsumption: 2, durability: 2, speed: 4, name });
  }
}

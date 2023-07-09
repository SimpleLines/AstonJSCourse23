import { Car } from './Car.js';

export class SportCar extends Car {
  constructor(name) {
    super({ fuel: 2, lowFuelConsumption: 1, durability: 1, speed: 6, name });
  }
}

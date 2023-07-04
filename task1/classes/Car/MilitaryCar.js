import { Car } from './Car.js';

export class MilitaryCar extends Car {
  constructor(name) {
    super({ fuel: 2, lowFuelConsumption: 2, durability: 4, speed: 2, name });
  }
}

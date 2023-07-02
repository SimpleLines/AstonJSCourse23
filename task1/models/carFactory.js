import Car from "./car.js";

export default class CarFactory {
  #countOpponentCar = 1;

  create(type, name) {
    switch (type) {
      case 'CivilianCar':
        return new Car(2, 2, 2, 4,name || 'Civilian Car');
        break;
      case 'SportCar':
        return new Car(2, 1, 1, 6,name ||  'Sport Car');
        break;
      case 'MilitaryCar':
        return new Car(2, 2, 4, 2,name ||  'Military Car');
        break;
      default:
        break;
    }
  }

  createOpponentCars(count) {
    if (count < 0 ) {
      throw new Error('Count слишком большой')
    }

    const opponentCars = [];

    while (count > 0) {
      opponentCars.push(this.#createOpponentCar());
      count--;
    }

    return opponentCars;
  }

  #createOpponentCar() {
    const carTypes = ['CivilianCar', 'SportCar', 'MilitaryCar'];
    const randomCarType = carTypes[Math.floor(Math.random() * carTypes.length)];
    const car = this.create(randomCarType, `Computer${this.#countOpponentCar} ${randomCarType}`);

    car[this.#randomAddPoint()] += 1;
    car[this.#randomAddPoint()] += 1;
    this.#countOpponentCar += 1;

    return car;
  }
  #randomAddPoint() {
    const characteristics = ['fuel', 'lowFuelConsumption', 'durability', 'speed'];

    return characteristics[Math.floor(Math.random() * characteristics.length)];
  }
}
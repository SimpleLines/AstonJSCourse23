import { carFactory, Car } from './classes/Car/index.js';
import { SPORT_CAR } from './core/constants.js';
import { createRandomCar } from './core/utils.js';

class App {
  #enemiesNumber;
  #playerCarType;
  #playerCarName;

  constructor({ enemiesNumber, playerCarType, playerCarName }) {
    this.#enemiesNumber = enemiesNumber;
    this.#playerCarType = playerCarType;
    this.#playerCarName = playerCarName;

    this.enemiesCars = [];
    this.playerCar;
  }

  run() {
    this.#createEnemies();
    this.#createPlayerCar();
  }

  #createEnemies() {
    for (let i = 0; i < this.#enemiesNumber; i++) {
      this.enemiesCars.push(createRandomCar(i));
    }
  }

  #createPlayerCar() {
    this.playerCar = carFactory({ type: this.#playerCarType, name: this.#playerCarName });
  }

  improvePlayerCar(param) {
    this.playerCar.improve(param);
    return this;
  }

  getCarStats() {
    return Car.compare([...this.enemiesCars, this.playerCar]);
  }
}

const app = new App({ enemiesNumber: 3, playerCarType: SPORT_CAR, playerCarName: 'Player Car' });
app.run();

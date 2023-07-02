import Modal from "./modal.js";
import Car from "../models/car.js";

export default class CustomizationModal extends Modal {
  constructor({fuel, lowFuelConsumption, durability, speed, name}) {
    super();

    this.fuel = fuel;
    this.lowFuelConsumption = lowFuelConsumption;
    this.durability = durability;
    this.speed = speed;
    this.name = name;
    this.remainingPoints = 2;
    this.game = null;

    this.init();
  }

  init() {
    const increaseButtons = document.querySelectorAll('.increase');
    const decreaseButtons = document.querySelectorAll('.decrease');

    ['fuel', 'lowFuelConsumption', 'durability', 'speed'].forEach( (prop, i) => {
      this.updateUI(prop);
      increaseButtons[i].addEventListener('click', () => this.increase(prop));
      decreaseButtons[i].addEventListener('click', () => this.decrease(prop));
    });

    super.init();
  }

  decrease(property) {
    if (this[property] > 0) {
      this[property]--;
      this.remainingPoints++;
      this.updateUI(property);
    }
  }

  increase(property) {
    if (this.remainingPoints > 0) {
      this[property]++;
      this.remainingPoints--;
      this.updateUI(property);
    }
  }

  updateUI(property) {
    document.getElementById(property).textContent = this[property];
    document.getElementById("remainingPoints").textContent = this.remainingPoints;
  }

  open(game) {
    this.game = game;
    super.open();
  }

  close() {
    if (this.game.cars.length && this.game.cars[0].name.includes('Player')) {
      this.game.cars.shift();
    }

    this.game.cars.unshift(new Car(
      this.fuel,
      this.lowFuelConsumption,
      this.durability,
      this.speed,
      `Player ${this.name}`
    ));

    this.game.updateCompareTable();
    super.close();
  }
}
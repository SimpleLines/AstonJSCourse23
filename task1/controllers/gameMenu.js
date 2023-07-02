import CustomizationModal from "../views/customizationModal.js";
import Car from "../models/car.js";
import CarFactory from "../models/carFactory.js";
import Track from "../models/track.js";

export default class GameMenu {
  constructor() {
    this.cars = [];
    this.carFactory = new CarFactory();

    this.init();
  }

  init() {
    const carTypeSelect = document.querySelector('#car-type-select');
    const addOpponentCarButton = document.querySelector('.add-opponent');
    const startButton = document.querySelector('#start-button');

    carTypeSelect.addEventListener('input', () => {
      new CustomizationModal(this.carFactory.create(carTypeSelect.value)).open(this);
    });

    addOpponentCarButton.addEventListener('click', () => this.addOpponent());

    startButton.addEventListener('click', () => this.startRace());
  }

  addOpponent() {
    const addOpponentCarInput = document.querySelector('#opponent-count');
    const count = +addOpponentCarInput.value;

    this.cars.push(...this.carFactory.createOpponentCars(count));
    this.updateCompareTable();
  }

  updateCompareTable() {
    if (!this.cars.length) {
      return;
    }

    const compareTableBody = document.querySelector('.compare-table tbody');
    const carComparisons = Car.compare(this.cars);

    compareTableBody.innerHTML = '';

    carComparisons.forEach((carComparison) => {
      const row = document.createElement('tr');
      const nameCell = document.createElement('td');
      const powerReserveCell = document.createElement('td');
      const durabilityCell = document.createElement('td');
      const speedCell = document.createElement('td');

      nameCell.textContent = carComparison.name;
      powerReserveCell.textContent = carComparison.powerReserve;
      durabilityCell.textContent = carComparison.durability;
      speedCell.textContent = carComparison.speed;

      row.appendChild(nameCell);
      row.appendChild(powerReserveCell);
      row.appendChild(durabilityCell);
      row.appendChild(speedCell);

      compareTableBody.appendChild(row);
    });
  }

  startRace() {
    const results = new Track(1500).race(this.cars);
    const resultElement = document.querySelector('.result');

    resultElement.innerHTML = '';

    results.forEach((result, i) => {
      const li = document.createElement('li');

      li.textContent = `${i + 1}) ${result.name} - ${result.time.toFixed(2)}s`;
      resultElement.appendChild(li);
    });

  }
}
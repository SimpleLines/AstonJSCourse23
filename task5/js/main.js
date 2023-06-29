import { Car, CivilianCar, MilitaryCar, SportCar } from './classes.js';

const nameCar = document.getElementById('nameCar');
const carTypeSelect = document.getElementById('carType');
const fuelInput = document.getElementById('fuel');
const lowFuelConsumptionInput = document.getElementById('lowFuelConsumption');
const durabilityInput = document.getElementById('durability');
const speedInput = document.getElementById('speed');
const opponentInput = document.getElementById('opponent');
const settingsDiv = document.getElementById('settings');
let selectedCar = null;
let randomCars = null;
let arrRacingCars = null;

carTypeSelect.addEventListener('change', function () {
  const selectedCarType = carTypeSelect.value;
  if (selectedCarType !== '') {
    settingsDiv.style.display = 'flex';
  } else {
    settingsDiv.style.display = 'none';
  }
  selectedCar = chooseCar(selectedCarType);
  setInitialValue();
});

function setInitialValue() {
  fuelInput.value = selectedCar.fuel;
  fuelInput.min = selectedCar.fuel;
  fuelInput.max = selectedCar.fuel + 2;

  lowFuelConsumptionInput.value = selectedCar.lowFuelConsumption;
  lowFuelConsumptionInput.min = selectedCar.lowFuelConsumption;
  lowFuelConsumptionInput.max = selectedCar.lowFuelConsumption + 2;

  durabilityInput.value = selectedCar.durability;
  durabilityInput.min = selectedCar.durability;
  durabilityInput.max = selectedCar.durability + 2;

  speedInput.value = selectedCar.speed;
  speedInput.min = selectedCar.speed;
  speedInput.max = selectedCar.speed + 2;

  opponentInput.value = 1;
  opponentInput.min = 1;
}

function chooseCar(selectedType) {
  switch (selectedType) {
    case 'civilian':
      return new CivilianCar();
    case 'sport':
      return new SportCar();
    case 'military':
      return new MilitaryCar();
    default:
      return new Car();
  }
}

function createRandomCars(count) {
  const carClasses = [CivilianCar, SportCar, MilitaryCar];
  const cars = [];

  for (let i = 0; i < count; i++) {
    const RandomCarClass =
      carClasses[Math.floor(Math.random() * carClasses.length)];

    const car = new RandomCarClass();

    const characteristics = [
      'fuel',
      'lowFuelConsumption',
      'durability',
      'speed',
    ];
    for (let j = 0; j < 2; j++) {
      const randomCharacteristic =
        characteristics[Math.floor(Math.random() * characteristics.length)];
      car[randomCharacteristic] += 1;
    }

    car.name = generateRandomString();
    cars.push(car);
  }

  return cars;
}

function generateRandomString() {
  let result = '';
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;

  for (let i = 0; i < 5; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}

function setYourCarProperty() {
  const fuelValue = parseFloat(fuelInput.value);
  const lowFuelValue = parseFloat(lowFuelConsumptionInput.value);
  const durabilityValue = parseFloat(durabilityInput.value);
  const speedValue = parseFloat(speedInput.value);
  const nameYourCar = nameCar.value;

  const totalValue = fuelValue + lowFuelValue + durabilityValue + speedValue;
  selectedCar.setProperty(
    fuelValue,
    lowFuelValue,
    durabilityValue,
    speedValue,
    nameYourCar
  );

  if (totalValue > 12) {
    throw new Error('Сумма всех полей не должна превышать 12!');
  }
}

function setCarsOfRace() {
  setYourCarProperty();
  randomCars = createRandomCars(opponentInput.value);
  arrRacingCars = [...randomCars, selectedCar];
}

function compare(cars) {
  const maxPowerReserve = Math.max(
    ...cars.map((car) => car.lowFuelConsumption)
  );
  const maxDurability = Math.max(...cars.map((car) => car.durability));
  const maxSpeed = Math.max(...cars.map((car) => car.speed));

  const comparedCars = cars.map((car) => ({
    powerReserve: (car.lowFuelConsumption / maxPowerReserve) * 100,
    durability: (car.durability / maxDurability) * 100,
    speed: (car.speed / maxSpeed) * 100,
    name: car.name,
  }));

  return comparedCars;
}

export { setCarsOfRace, compare, arrRacingCars };

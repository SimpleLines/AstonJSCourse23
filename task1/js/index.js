import { arrRacingCars, setCarsOfRace, compare } from './main.js';

function start() {
  try {
    setCarsOfRace();

    console.log('автомобили участвующие в рейсе: ', arrRacingCars);
    console.log('сравнительные характеристики: ', compare(arrRacingCars));

  } catch (error) {
    console.log(error.message);
  }
}

document.getElementById('startBtn').addEventListener('click', start);

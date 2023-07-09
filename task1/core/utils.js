import { carFactory } from '../classes/Car/index.js';
import {
  CIVILIAN_CAR,
  DURABILITY,
  FUEL,
  LOW_FUEL_CONSUMPTION,
  MILITARY_CAR,
  POINTS_NUM,
  SPEED,
  SPORT_CAR,
} from './constants.js';

function getRandom(min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1));
}

function createRandomCar(index) {
  const carTypes = [SPORT_CAR, CIVILIAN_CAR, MILITARY_CAR];
  const type = getRandomParam(carTypes);
  const name = `Car ${index + 1}`;
  const enemyCar = carFactory({ type, name });
  improveRandomChars(enemyCar);
  return enemyCar;
}

function improveRandomChars(car) {
  const chars = [DURABILITY, LOW_FUEL_CONSUMPTION, SPEED, FUEL];
  for (let i = 0; i < POINTS_NUM; i++) {
    const char = getRandomParam(chars);
    car.improve(char);
  }
}

function getRandomParam(paramsArr) {
  const paramsNum = paramsArr.length;
  const randomNum = getRandom(0, paramsNum - 1);
  return paramsArr[randomNum];
}

export { getRandom, createRandomCar, improveRandomChars };

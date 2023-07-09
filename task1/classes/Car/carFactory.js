import { CIVILIAN_CAR, MILITARY_CAR, SPORT_CAR } from '../../core/constants.js';
import { CivilianCar, MilitaryCar, SportCar } from './index.js';

export function carFactory({ type, name }) {
  let Car;
  switch (type) {
    case MILITARY_CAR:
      Car = MilitaryCar;
      break;
    case CIVILIAN_CAR:
      Car = CivilianCar;
      break;
    case SPORT_CAR:
      Car = SportCar;
      break;
    default:
      Car = CivilianCar;
      break;
  }
  return new Car(name);
}

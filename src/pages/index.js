import CivilianCar from "../components/CivilianCar.js";
import SportCar from "../components/SportCar.js";
import MilitaryCar from "../components/MilitaryCar.js";

const test1 = new CivilianCar(1, 0, 0, 1, 1, 0, 0, 1);
const test2 = new SportCar(0, 1, 0, 1, 0, 1, 0, 1);
const test3 = new MilitaryCar(1, 0, 1, 0, 1, 0, 1, 0);

console.log(test1.calculatePowerReserve());
console.log(test1.calculateDurability());
console.log(test1.calculateSpeed());

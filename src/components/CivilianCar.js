import Car from "./Car.js";

class CivilianCar extends Car {
  constructor(bonusFuel, bonusLowFuelConsumption, bonusDurability, bonusSpeed) {
    super({
      fuel: 2,
      lowFuelConsumption: 2,
      durability: 2,
      speed: 4,
      name: "Civilian Car",
      bonusFuel,
      bonusLowFuelConsumption,
      bonusDurability,
      bonusSpeed,
    });
  }
}

export default CivilianCar;

import Car from "./Car.js";

class SportCar extends Car {
  constructor(
    bonusFuel = 0,
    bonusLowFuelConsumption = 0,
    bonusDurability = 0,
    bonusSpeed = 0
  ) {
    super({
      fuel: 2,
      lowFuelConsumption: 1,
      durability: 1,
      speed: 6,
      name: "Sport Car",
      bonusFuel,
      bonusLowFuelConsumption,
      bonusDurability,
      bonusSpeed,
    });
  }
}

export default SportCar;

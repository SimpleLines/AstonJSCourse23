import Car from "./Car.js";

class MilitaryCar extends Car {
  constructor(
    bonusFuel = 0,
    bonusLowFuelConsumption = 0,
    bonusDurability = 0,
    bonusSpeed = 0
  ) {
    super({
      fuel: 2,
      lowFuelConsumption: 2,
      durability: 4,
      speed: 2,
      name: "Military Car",
      bonusFuel,
      bonusLowFuelConsumption,
      bonusDurability,
      bonusSpeed,
    });
  }
}

export default MilitaryCar;

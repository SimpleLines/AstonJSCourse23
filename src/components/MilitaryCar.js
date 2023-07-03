import Car from "./Car";

class MilitaryCar extends Car {
  constructor() {
    super({
      fuel: 2,
      lowFuelConsumption: 2,
      durability: 4,
      speed: 2,
      name: "Military Car",
    });
  }
}

export default MilitaryCar;

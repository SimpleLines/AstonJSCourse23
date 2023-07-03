import Car from "./Car";

class SportCar extends Car {
  constructor() {
    super({
      fuel: 2,
      lowFuelConsumption: 1,
      durability: 1,
      speed: 6,
      name: "Sport Car",
    });
  }
}

export default SportCar;

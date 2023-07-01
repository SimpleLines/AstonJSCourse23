import Car from "./Car.mjs";

export default class Sport extends Car {
    constructor(name) {
        super(name);
        this.fuel = 2;
        this.totalFuel = this.defaultFuel + this.fuel;
        this.lowFuelConsumption = 1;
        this.durability = 1;
        this.speed = 6;
    }
}


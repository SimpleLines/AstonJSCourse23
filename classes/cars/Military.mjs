import Car from "./Car.mjs";

export default class Military extends Car {
    constructor(name) {
        super(name);
        this.fuel = 2;
        this.totalFuel = this.defaultFuel + this.fuel;
        this.lowFuelConsumption = 2;
        this.durability = 4;
        this.speed = 2;
    }
}
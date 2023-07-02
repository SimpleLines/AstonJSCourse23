import { randomIntFromInterval } from "../utills/Helper.mjs";
import Sport from "../classes/cars/Sport.mjs";
import Civilian from "../classes/cars/Civilian.mjs";
import Military from "../classes/cars/Military.mjs";

export default class RandomFactoryCar {
    constructor(players) {
        this.cars = [];
        this.players = players;
    }
    createRandomCars() {
        for (let i = 0; i < this.players; i++) {
            let randomInt = randomIntFromInterval(1, 3);
            if (randomInt == 1) this.cars.push(new Sport(`Bot_${i + 1}`));
            if (randomInt == 2) this.cars.push(new Civilian(`Bot_${i + 1}`));
            if (randomInt == 3) this.cars.push(new Military(`Bot_${i + 1}`));
        }
    }
    upgradeFactoryCars() {
        for (let item of this.cars) {
            let points = item.pointsToUpgrade;
            while (points > 0) {
                let pointsToAdd = randomIntFromInterval(1, points);
                let directionToUp = randomIntFromInterval(1, 4);
                if (directionToUp == 1) {
                    item.fuel += pointsToAdd;
                }
                if (directionToUp == 2) {
                    item.lowFuelConsumption += pointsToAdd;
                }
                if (directionToUp == 3) {
                    item.durability += pointsToAdd;
                }
                if (directionToUp == 4) {
                    item.speed += pointsToAdd;
                }
                points -= pointsToAdd;
            }
        }
        return this.cars;
    }
}
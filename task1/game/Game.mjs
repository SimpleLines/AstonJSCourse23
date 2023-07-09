import compare from "../utills/Compare.mjs";
import { sortCarsWinners } from '../utills/Helper.mjs';
import carModification from "../car_modification/CarUpgrade.mjs";
import RandomFactoryCar from "../car_modification/RandomFactoryCar.mjs";
import Sport from "../classes/cars/Sport.mjs";

class Game {
    constructor(distanceToFinish) {
        this.distanceToFinish = distanceToFinish;
    }
    gameSettings() {
        let myCar = new Sport('BWM');
        const paramsToUpgrade = {
            speed: 2,
            fuel: 0,
            durability: 0,
            lowFuelConsumption: 0
        }
        let myUpgradedCar = carModification(myCar, paramsToUpgrade);
        let factory = new RandomFactoryCar(5);
        factory.createRandomCars();
        let upgradedCars = factory.upgradeFactoryCars();
        upgradedCars.push(myUpgradedCar);
        let statsOfCars = compare(upgradedCars);
        console.log('Статистика машин участвующий в гонке!(%)');
        console.log(statsOfCars);
        return upgradedCars;
    }
    lookingForWinner(cars) {
        for (let car of cars) {
            let maxCurrentCarDistance = car.totalDistance();
            if (maxCurrentCarDistance >= this.distanceToFinish) {
                car.won = true;
            }
        }
        let checkWinners = cars.filter((car) => car.won == true)
        let whoWon = compare(checkWinners);
        let winners = sortCarsWinners(whoWon);
        if (winners.length == 0) {

            return 'Победителей, к сожалению, нет!';
        }
        if (winners.length == 1) {

            return `Единтсвенный победитель гонки - ${winners[0].name}`;
        }

        return `${winners[0].name} - пришел первый к финишу! ${winners[winners.length - 1].name} 
        был последним в этом состязании и проиграл!`;
    }
    static start() {
        let game = new Game(1600);
        let readyToGameCars = game.gameSettings();
        let counter = 0;
        const intervalId = setInterval(() => {
            console.log(`...${counter}`);
            counter += 1;
            if (counter === 6) {
                console.log('Гонка началась!!!');
                clearInterval(intervalId);
                setTimeout(() => {
                    console.log('ФИНИШ!!!');
                    console.log(game.lookingForWinner(readyToGameCars));
                }, 3000)
            }
        }, 1000);
    }
}

Game.start();

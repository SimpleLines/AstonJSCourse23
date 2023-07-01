import compare from "../Utills/Compare.mjs";
import { sortCarsWinners } from "../Utills/Helper.mjs";
import Car from "../Classes/Cars/Car.mjs";
import CarModification from "../car_modification/CarUpgrade.mjs";
import Civilian from "../Classes/Cars/Civilian.mjs";
import RandomFactoryCar from "../car_modification/RandomFactoryCar.mjs";
import Sport from "../Classes/Cars/Sport.mjs";
class Game {
    constructor(distanceToFinish) {
        this.distanceToFinish = distanceToFinish;
    }

    gameSettings() {
        let myCar = new Sport('BWM')
        const paramsToUpgrade = {
            //Выберите 2 очка для апгрейда вашей машины
            speed: 2,
            fuel: 0,
            durability: 0,
            lowFuelConsumption: 0
        }
        let myUpgradedCar = CarModification(myCar, paramsToUpgrade)

        //Выберите количество участвующих в гонке
        let factory = new RandomFactoryCar(4);
        factory.createCars();
        let upgradedCars = factory.upgradeCars(); // []
        upgradedCars.push(myUpgradedCar);

        let stats = compare(upgradedCars);
        console.log('Статистика машин участвующий в гонке!(%)');
        console.log(stats)

        return upgradedCars;
    }

    lookingForWinner(cars) {

        for (let car of cars) {
            let maxCurrentCarDistance = car.totalDistance()
            if (maxCurrentCarDistance >= this.distanceToFinish) {
                car.won = true;
            }
        }

        let checkWinners = cars.filter((car) => car.won == true)
        let whoWon = compare(checkWinners);
        let winners = sortCarsWinners(whoWon)

        if (winners.length == 0) return 'Победителей, к сожалению, нет!'
        if (winners.length == 1) return `Единтсвенный победитель гонки - ${winners[0].name}`

        return `${winners[0].name} - пришел первый к финишу! ${winners[winners.length - 1].name} 
        был последним в этом состязании и проиграл!`
    }

    static start() {
        let game = new Game(1600);
        let createdCarsToGame = game.gameSettings();

        let counter = 0;
        const intervalId = setInterval(() => {
            console.log(`...${counter}`);
            counter += 1;
            if (counter === 6) {
                console.log('Гонка началась!!!');
                clearInterval(intervalId);
                setTimeout(() => {
                    console.log('ФИНИШ!!!');
                    console.log(game.lookingForWinner(createdCarsToGame));
                }, 3000)
            }
        }, 1000);
    }
}

Game.start()










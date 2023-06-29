class Game {
  constructor() {
    this.roadDistance = 1600;
    this.enemies = 5;
    this.totalCars = [];
    this.carsPlayer = [];
    this.defaultParams = {
      civilian: {
        fuel: 2,
        lowFuelConsumption: 2,
        durability: 2,
        speed: 4,
      },
      sport: {
        fuel: 2,
        lowFuelConsumption: 1,
        durability: 1,
        speed: 6,
      },
      military: {
        fuel: 2,
        lowFuelConsumption: 2,
        durability: 4,
        speed: 2,
      },
    };
  }
  start() {
    this.totalCars = this.totalCars.filter((car) => car.owner !== "bot");
    const typeCars = { 0: Civilian, 1: Sport, 2: Military };
    const paramsToUpgrade = ["fuel", "lowFuelConsumption", "durability", "speed"];
    for (let i = 0; i < this.enemies; i++) {
      const typeCar = typeCars[randomMath(2)];
      const firstUpgrade = paramsToUpgrade[randomMath(paramsToUpgrade.length - 1)];
      const secondUpgrade = paramsToUpgrade[randomMath(paramsToUpgrade.length - 1)];
      const botCar = new typeCar(`Unknown Car ${i + 1}`, "bot");
      botCar.upgrade(firstUpgrade).upgrade(secondUpgrade);
    }
    this.compare();
    return this.game();
  }
  game() {
    const lastFinishCar = [...this.totalCars].sort((a, b) => a.speed - b.speed)[0];
    const resultGame = this.totalCars.map((car) => {
      const { powerReserve, name } = car;
      let win = true;
      if (powerReserve < this.roadDistance) win = false;
      if (car === lastFinishCar) win = false;
      return win ? `Машина с именем ${name} выжила` : `К сожалению машина с именем ${name} проиграла`;
    });
    return resultGame;
  }
  compare() {
    let maxSpeed = 0;
    let maxDurability = 0;
    let maxPowerReserve = 0;
    const calcCars = this.totalCars.map((car) => {
      car.speed = car.calcSpeed();
      car.durability = car.calcDurability();
      car.powerReserve = car.calcPowerReserve();
      const { speed, durability, powerReserve, name } = car;
      maxSpeed = speed > maxSpeed ? speed : maxSpeed;
      maxDurability = durability > maxDurability ? durability : maxDurability;
      maxPowerReserve = powerReserve > maxPowerReserve ? powerReserve : maxPowerReserve;
      return { speed, durability, powerReserve, name };
    });
    const carsCompared = calcCars.map((car) => {
      const { speed, durability, powerReserve } = car;
      car.speed = calcHelperPercent(speed, maxSpeed);
      car.durability = calcHelperPercent(durability, maxDurability);
      car.powerReserve = calcHelperPercent(powerReserve, maxPowerReserve);
      return car;
    });
    return carsCompared;
  }
}

class Cars {
  constructor(params, { name = "Unknown Car", owner = "player" }) {
    this.name = name;
    this.owner = owner;
    this.defaultFuel = 5;
    this.speed = 10;
    this.durability = 100;
    this.params = Object.assign({}, params);
    this.totalPoints = Object.keys(this.params).reduce((acc, key) => (acc += this.params[key]), 0);
    game.totalCars.push(this);
  }
  upgrade(param) {
    this.params[param] += 1;
    this.totalPoints += 1;
    if (this.totalPoints > 12) throw new Error("Превышен лимит распределяемых очков");
    return this;
  }
  calcPowerReserve() {
    const { fuel, lowFuelConsumption } = this.params;
    const totalFuel = this.defaultFuel + fuel;
    const powerReserve = totalFuel * 200 + totalFuel * 0.1 * 200 * lowFuelConsumption;
    return powerReserve;
  }
  calcSpeed() {
    const { speed } = this;
    const totalSpeed = speed + this.params.speed * 0.05 * speed;
    return totalSpeed;
  }
  calcDurability() {
    const { durability } = this;
    const totalDurability = durability + this.params.durability * 0.1 * durability;
    return totalDurability;
  }
}

class Civilian extends Cars {
  constructor(name, owner) {
    super(game.defaultParams["civilian"], { name, owner });
  }
}
class Sport extends Cars {
  constructor(name, owner) {
    super(game.defaultParams["sport"], { name, owner });
  }
}
class Military extends Cars {
  constructor(name, owner) {
    super(game.defaultParams["military"], { name, owner });
  }
}

const calcHelperPercent = (from, value) => {
  return Math.round((from / value) * 100);
};

const randomMath = (max, min = 0) => {
  return Math.round(Math.random() * (max - min) + min);
};

const game = new Game();
const carRio = new Civilian("rio");
carRio.upgrade("speed").upgrade("fuel");
console.log(game.start());
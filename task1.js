class Race {
  createCar(car, fuel, lowFuelConsumption, durability, speed, name) {
    switch(car) {
      case 'civilian': 
        return new CivilianCar(fuel, lowFuelConsumption, durability, speed, name);
      case 'military':
        return new MilitaryCar(fuel, lowFuelConsumption, durability, speed, name);
      case 'sport':
        return new SportCar(fuel, lowFuelConsumption, durability, speed, name);
    }
  }

  createOpponents(quantity) {
    let carTypes = ['civilian', 'military', 'sport'];
    let opponents = [];

    for(let i = 0; i < quantity; i++) {
      let randomCar = this.#randomNumber(0,2);
      opponents.push(this.createCar(carTypes[randomCar], 0, this.#randomNumber(0,1), 0, this.#randomNumber(0,1), `Opponent №${i + 1}`));
    }
    return opponents;
  }

  showWinner(arr) {
    let carsStat = Car.compare(arr);
    let scores = [];

    carsStat.forEach((car) => {
      scores.push(parseInt(car.durability) + parseInt(car.powerReserve) + parseInt(car.speed));
    })

    const winnerScore = Math.max(...scores);
    const winnerIndex = scores.indexOf(winnerScore);

    return carsStat[winnerIndex].name;
  }

  #randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
}

class Car {
  constructor(fuel, lowFuelConsumption, durability, speed, name) {
    this.fuel = fuel
    this.lowFuelConsumption = lowFuelConsumption
    this.durability = durability
    this.speed = speed
    this.name = name
    this.totalFuel = 5 + this.fuel
  }

  static highestValues = {};

  static compare(arr) {
    let cars = [];

    arr.forEach((el) => {
      cars.push(
        {
          powerReserve: el.checkPowerReserve(),
          durability: el.showTotalDurability(),
          speed: el.showTotalSpeed(),
          name: el.name
        }
      )
    })

    let comparedCars = cars.map((car) => {
      return {
        powerReserve: (car.powerReserve / (Car.highestValues['powerReserve'] / 100)).toFixed(0) + '%',
        durability: (car.durability / (Car.highestValues['durability'] / 100)).toFixed(0) + '%',
        speed: (car.speed / (Car.highestValues['speed'] / 100)).toFixed(0) + '%',
        name: car.name
      }
    })

    return comparedCars;
  }

  #checkHighestValues(str, res) {
    const curr = str;
    if(!Car.highestValues.hasOwnProperty(curr)) {
      Car.highestValues[curr] = res;
    } else if(Car.highestValues[curr] < res) {
      Car.highestValues[curr] = res;
    }
  }

  checkPowerReserve() {
    const res = this.totalFuel * 200 + this.totalFuel * 0.1 * 200 * this.lowFuelConsumption;
    this.#checkHighestValues('powerReserve', res);
    return res;
  }

  showTotalDurability() {
    const res = 100 + this.durability * 0.1 * 100;
    this.#checkHighestValues('durability', res);
    return res;
  }

  showTotalSpeed() {
    const res = 10 + this.speed * 0.05 * 10;
    this.#checkHighestValues('speed', res);
    return res;
  }

  checkPoints() {
    const sum = this.fuel + this.durability + this.speed + this.lowFuelConsumption;
    if(sum > 12) {
      throw new Error("Превышен лимит распределяемых очков");
    }
  }
}

class CivilianCar extends Car {
  constructor(fuel, lowFuelConsumption, durability, speed, name) {
    super(fuel, lowFuelConsumption, durability, speed, name) 
    this.fuel = fuel + 2
    this.lowFuelConsumption = lowFuelConsumption + 2
    this.durability = durability + 2
    this.speed = speed + 4
    this.name = name
    this.checkPoints()
    this.totalFuel = 5 + this.fuel
  }
}

class SportCar extends Car {
  constructor(fuel, lowFuelConsumption, durability, speed, name) {
    super(fuel, lowFuelConsumption, durability, speed, name) 
    this.fuel = fuel + 2
    this.lowFuelConsumption = lowFuelConsumption + 1
    this.durability = durability + 1
    this.speed = speed + 6
    this.name = name
    this.checkPoints()
    this.totalFuel = 5 + this.fuel
  }
}

class MilitaryCar extends Car {
  constructor(fuel, lowFuelConsumption, durability, speed, name) {
    super(fuel, lowFuelConsumption, durability, speed, name) 
    this.fuel = fuel + 2
    this.lowFuelConsumption = lowFuelConsumption + 2
    this.durability = durability + 4
    this.speed = speed + 2
    this.name = name
    this.checkPoints()
    this.totalFuel = 5 + this.fuel
  }
}
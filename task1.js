class Car {
  constructor(
    fuel = 0,
    lowFuelConsumption = 0,
    durability = 0,
    speed = 0,
    name = "Unknown Car"
  ) {
    (this.fuel = fuel),
    (this.lowFuelConsumption = lowFuelConsumption),
    (this.durability = durability),
    (this.speed = speed),
    (this.name = name);
  }
}

class Civilian extends Car {
  constructor(name) {
    super();
    (this.fuel = 2),
    (this.lowFuelConsumption = 2),
    (this.durability = 2),
    (this.speed = 4),
    (this.name = name);
  }
}

class Sport extends Car {
  constructor(name) {
    super();
    (this.fuel = 2),
    (this.lowFuelConsumption = 1),
    (this.durability = 1),
    (this.speed = 6),
    (this.name = name);
  }
}

class Military extends Car {
  constructor(name) {
    super();
    (this.fuel = 2),
    (this.lowFuelConsumption = 2),
    (this.durability = 4),
    (this.speed = 2),
    (this.name = name);
  }
}

function randomNumber(max) {
  let rand = Math.random() * (max + 1);
  return Math.floor(rand);
}

function randomName() {
  const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",];
  let newName = [];

  for (let i = 0; i < 6; i++) {
    if (i == 0) {
      newName.push(alphabet[randomNumber(25)].toLocaleUpperCase());
    }
    newName.push(alphabet[randomNumber(25)]);
  }

  return newName.join("");
}

function randomOpponentCar() {
  const arrCars = [Civilian, Sport, Military];
  const opponentCar = new arrCars[randomNumber(2)](randomName());
  const settings = ["fuel", "lowFuelConsumption", "durability", "speed"];
  for (let i = 0; i < 2; i++) {
    opponentCar[settings[randomNumber(3)]] += 1;
  }

  return opponentCar;
}

function userCar(
  carType = Military || Sport || Civilian,
  userName,
  fuel = 0,
  lowFuelConsumption = 0,
  durability = 0,
  speed = 0
) {
  const userCar = new carType(userName);
  (userCar.fuel += fuel),
  (userCar.lowFuelConsumption += lowFuelConsumption),
  (userCar.durability += durability),
  (userCar.speed += speed);

  if (userCar.fuel + userCar.lowFuelConsumption + userCar.durability + userCar.speed > 12) {
    throw Error("Превышен лимит распределяемых очков");
  }

  return userCar;
}

const playerChoice = userCar(Military, "Max", 1, 0, 0, 1);

function allPlayers(numberOfOpponents) {
  let totalCars = [];
  totalCars.push(playerChoice);
  for (let i = 0; i < numberOfOpponents; i++) {
    totalCars.push(randomOpponentCar());
  }

  return totalCars;
}

const cars = allPlayers(4);

function compare(cars) {
  const compareCars = cars.map(
    ({ fuel, lowFuelConsumption, durability, speed, name }) => {
      return {
        powerReserv: (5 + fuel) * 200 + (5 + fuel) * 0.1 * 200 * lowFuelConsumption,
        durability: 100 + durability * 0.1 * 100,
        speed: 10 + speed * 0.05 * 100,
        name: name,
      };
    }
  );

  return compareCars;
}
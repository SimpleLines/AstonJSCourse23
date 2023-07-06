class Car {
  constructor(name) {
    this.name = name ?? 'Unknown Car';
    this.fuel = 0;
    this.lowFuelConsumption = 0;
    this.durability = 0;
    this.speed = 0;
  }

  getPowerReserve() {
    const defaultFuel = 5;
    const totalFuel = defaultFuel + this.fuel;
    const powerReserve = totalFuel * 200 + totalFuel * 0.1 * 200 * this.lowFuelConsumption;
    return powerReserve;
  }

  getSpeed() {
    const baseSpeed = 10;
    const totalSpeed = baseSpeed + this.speed * 0.05 * baseSpeed;
    return totalSpeed;
  }

  getDurability() {
    const baseDurability = 100;
    const totalDurability = baseDurability + this.durability * 0.1 * baseDurability;
    return totalDurability;
  }

  upgrade(stat) {
    let totalPoints =
      this.fuel + this.lowFuelConsumption + this.durability + this.speed + 1;
    if (totalPoints > 12) throw new Error('Превышен лимит распределяемых очков');
    return (this[stat] += 1);
  }
}

class Civilian extends Car {
  constructor(name) {
    super(name ?? 'Unknown Civilian Car');
    this.fuel = 2;
    this.lowFuelConsumption = 2;
    this.durability = 2;
    this.speed = 4;
  }
}

class Sport extends Car {
  constructor(name) {
    super(name ?? 'Unknown Sport Car');
    this.fuel = 2;
    this.lowFuelConsumption = 1;
    this.durability = 1;
    this.speed = 6;
  }
}

class Military extends Car {
  constructor(name) {
    super(name ?? 'Unknown Military Car');
    this.fuel = 2;
    this.lowFuelConsumption = 2;
    this.durability = 4;
    this.speed = 2;
  }
}

function compare(cars) {
  const maxPowerReserve = Math.max(...cars.map((car) => car.getPowerReserve()));
  const maxSpeedCars = Math.max(...cars.map((car) => car.getSpeed()));
  const maxDurability = Math.max(...cars.map((car) => car.getDurability()));
  const comparedCars = cars.map((car) => ({
    name: car.name,
    powerReserve: Math.round((car.getPowerReserve() / maxPowerReserve) * 100) + '%',
    speed: Math.round((car.getSpeed() / maxSpeedCars) * 100) + '%',
    durability: Math.round((car.getDurability() / maxDurability) * 100) + '%',
  }));

  return comparedCars;
}

function createRandomStat() {
  const allCarsStats = ['fuel', 'lowFuelConsumption', 'durability', 'speed'];
  let randomStat = allCarsStats[Math.floor(Math.random() * allCarsStats.length)];
  return randomStat;
}

function createRandomOpponentCars(count) {
  const allCarsClasses = [Civilian, Sport, Military];
  const oppsCars = [] 
  for (let i = 0; i < count; i++) {
    const randomClass =
    allCarsClasses[Math.floor(Math.random() * allCarsClasses.length)];
    const randomCar = new randomClass('Random Opponents Car');
    randomCar.upgrade(createRandomStat());
    randomCar.upgrade(createRandomStat());
    oppsCars.push(randomCar);
  }

  return oppsCars;
}
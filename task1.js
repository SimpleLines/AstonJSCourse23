const carsEmptyArr = [];

function addCar(car) {
  return carsEmptyArr.push(car);
}

class Car {
  count = 2;
  constructor() {
    (this.fuel = 0),
      (this.lowFuelConsumption = 0),
      (this.durability = 0),
      (this.speed = 0),
      (this.name = "Unknown Car"),
      addCar(this);
  }

  upgradeValue(value, operation) {
    if (this.count > 0 && operation === "INCREMENT") {
      this[value] += 1;
      this.count -= 1;
    } else if (this.count === 0 && operation === "DECREMENT") {
      this[value] -= 1;
      this.count += 1;
    } else if (this.count < 2 && operation === "DECREMENT") {
      this[value] -= 1;
      this.count += 1;
    } else if (this.count === 2 && operation === "DECREMENT") return null;
    else throw new Error("Превышен лимит распределяемых очков");
  }
}

class Civilian extends Car {
  constructor(name) {
    super();
    (this.fuel = 2),
      (this.lowFuelConsumption = 2),
      (this.durability = 2),
      (this.speed = 4),
      (this.name = name || "Unknown Car");
  }
}

class Super extends Car {
  constructor(name) {
    super();
    (this.fuel = 2),
      (this.lowFuelConsumption = 1),
      (this.durability = 1),
      (this.speed = 6),
      (this.name = name || "Unknown Car");
  }
}

class Military extends Car {
  constructor(name) {
    super();
    (this.fuel = 2),
      (this.lowFuelConsumption = 2),
      (this.durability = 4),
      (this.speed = 2),
      (this.name = name || "Unknown Car");
  }
}

function createRandomCar(count) {
  const carsTypes = [Civilian, Super, Military];
  const paramsCar = ["fuel", "lowFuelConsumption", "durability", "speed"];
  while (count) {
    const indexTypeCar = Math.floor(Math.random() * 3);
    const instance = new carsTypes[indexTypeCar](`${count}-Bot`);
    instance.upgradeValue(
      paramsCar[Math.floor(Math.random() * 4)],
      "INCREMENT"
    );
    instance.upgradeValue(
      paramsCar[Math.floor(Math.random() * 4)],
      "INCREMENT"
    );
    count--;
  }
}
function compare(array) {
  if (!array.length) throw new Error("Массив с автомобилями пуст.");
  const maxPowerReserve = Math.max(
    ...array.map(
      (car) =>
        (5 + car.fuel) * 200 +
        (5 + car.fuel) * 0.1 * 200 * car.lowFuelConsumption
    )
  );
  const maxDurability = Math.max(
    ...array.map((car) => 100 + car.durability * 0.1 * 100)
  );
  const maxSpeed = Math.max(...array.map((car) => 10 + car.speed * 0.05 * 10));
  return array.map((car) => {
    return {
      powerReserve:
        Math.round(
          (5 + car.fuel) * 200 +
            (((5 + car.fuel) * 0.1 * 200 * car.lowFuelConsumption) /
              maxPowerReserve) *
              100
        ) + "%",
      durability:
        Math.round(((100 + car.durability * 0.1 * 100) / maxDurability) * 100) +
        "%",
      speed: Math.round(((10 + car.speed * 0.05 * 10) / maxSpeed) * 100) + "%",
      name: car.name,
    };
  });
}
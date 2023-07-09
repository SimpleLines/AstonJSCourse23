class Car {
    constructor(name = 'Unknown Car') {
        this.fuel = 0;
        this.lowFuelConsumption = 0;
        this.durability = 0;
        this.speed = 0;
        this.name = name;
    }

    totalValue() {
        if (this.speed + this.fuel + this.durability + this.lowFuelConsumption > 12) {
            throw new Error("Превышен лимит распределяемых очков")
        }
    }

    getPowerReserve() {
        const totalFuel = 5 + this.fuel;
        return totalFuel * 200 + totalFuel * 0.1 * 200 * this.lowFuelConsumption;
    }
    getDurability() {
        return 100 + this.durability * 0.1 * 100
    }
    getSpeed() {
        return 10 + this.speed * 0.05 * 10
    }
}

class CivilianCar extends Car {
    constructor(name) {
        super(name);
        this.fuel = 2;
        this.lowFuelConsumption = 2;
        this.durability = 2;
        this.speed = 4;
    }
}

class SportCar extends Car {
    constructor(name) {
        super(name);
        this.fuel = 2;
        this.lowFuelConsumption = 1;
        this.durability = 1;
        this.speed = 6;
    }
}

class MilitaryCar extends Car {
    constructor(name) {
        super(name);
        this.fuel = 2;
        this.lowFuelConsumption = 2;
        this.durability = 4;
        this.speed = 2;
    }
}

let yourCar = null;
const carFuel = document.getElementById('fuel');
const carLowFuelConsumption = document.getElementById('lowFuelConsumption');
const carDurability = document.getElementById('durability');
const carName = document.getElementById('name');
const carSpeed = document.getElementById('speed');
const carEnemy = document.getElementById('enemy');
const addAbilityOfcar = document.getElementById('ability')
const btnCompare = document.getElementById('compare')
const cars = [];
let typeOfCar = document.getElementById('typeOfCar')

typeOfCar.addEventListener('change', function () {
    const typeOfYourCar = typeOfCar.value;
    if (typeOfYourCar == "civilian") yourCar = new CivilianCar()
    if (typeOfYourCar == "sport") yourCar = new SportCar()
    if (typeOfYourCar == "military") yourCar = new MilitaryCar()
    carFuel.value = yourCar.fuel;
    carLowFuelConsumption.value = yourCar.lowFuelConsumption;
    carDurability.value = yourCar.durability;
    carSpeed.value = yourCar.speed
})
carName.addEventListener('change', function () {
    yourCar.name = carName.value
})

addAbilityOfcar.addEventListener('change', function () {
    yourCar.fuel = +carFuel.value
    yourCar.lowFuelConsumption = +carLowFuelConsumption.value
    yourCar.durability = +carDurability.value
    yourCar.speed = +carSpeed.value
    yourCar.totalValue()
})
function createEnemies(count) {
    let carType = [CivilianCar, SportCar, MilitaryCar];
    for (let i = 0; i < count; i++) {
        const EnemyCar = carType[Math.floor(Math.random() * carType.length)];
        const enemyCar = new EnemyCar();
        const characteristics = ['fuel', 'lowFuelConsumption', 'durability', 'speed',]
        for (let j = 0; j < 2; j++) {
            const randomCharacteristic =
                characteristics[Math.floor(Math.random() * characteristics.length)];
            enemyCar[randomCharacteristic] += 1;
        }
        enemyCar.name = (Math.random() + 1).toString(36).substring(7);
        cars.push(enemyCar);
    }
    if (cars.find((item) => item != yourCar)) cars.push(yourCar)
}
carEnemy.addEventListener('blur', function () {
    createEnemies(carEnemy.value)
})
function compare() {
    return cars.map((car) => ({
        powerReserve: Math.round((car.getPowerReserve() / Math.max(...cars.map((car) => car.getPowerReserve()))) * 100),
        durability: Math.round((car.getDurability() / Math.max(...cars.map((car) => car.getDurability()))) * 100),
        speed: Math.round((car.getSpeed() / Math.max(...cars.map((car) => car.getSpeed()))) * 100),
        name: car.name,
    }))
}
btnCompare.addEventListener('click', function () {
    alert(JSON.stringify(compare()))
})

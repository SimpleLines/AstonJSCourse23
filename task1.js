class Car {
    constructor(name, fuel, lowFuelConsumption, durability, speed, extraPoints, player) {
        this.player = player;
        this.name = name;
        this.fuel = fuel + Math.min(extraPoints, 2);
        this.lowFuelConsumption = lowFuelConsumption + Math.max(Math.min(extraPoints - 2, 1), 0);
        this.durability = durability + Math.max(Math.min(extraPoints - 3, 1), 0);
        this.speed = speed + Math.max(extraPoints - 4, 0);
        this.extraPoints = extraPoints;
        if (this.extraPoints > 2) {
            throw new Error("Превышен лимит распределяемых очков");
        }
    }

    get powerReserve() {
        const defaultFuel = 5;
        const totalFuel = defaultFuel + this.fuel;
        const consumption = 200 * 0.1 * this.lowFuelConsumption;
        return ((totalFuel * 200) / (consumption + 200 * totalFuel)) * 100;
    }

    get totalDurability() {
        return 100 + this.durability * 0.1 * 100;
    }

    get totalSpeed() {
        return 10 + this.speed * 0.05 * 10;
    }
}

class CivilianCar extends Car {
    constructor(extraPoints, player) {
        super("Civilian Car", 2, 2, 2, 4, extraPoints, player);
    }
}

class SportCar extends Car {
    constructor(extraPoints, player) {
        super("Sport Car", 2, 1, 1, 6, extraPoints, player);
    }
}

class MilitaryCar extends Car {
    constructor(extraPoints, player) {
        super("Military Car", 2, 2, 4, 2, extraPoints, player);
    }
}

class CarFactory {
    static createCar(type, extraPoints, player) {
        switch (type) {
            case "civilian":
                return new CivilianCar(extraPoints, player);
            case "sport":
                return new SportCar(extraPoints, player);
            case "military":
                return new MilitaryCar(extraPoints, player);
            default:
                throw new Error("Unknown car type");
        }
    }

    static createRandomCars(count) {
        const types = ["civilian", "sport", "military"];
        const cars = [];
        const player = 'bot';
        for (let i = 0; i < count; i++) {
            const type = types[Math.floor(Math.random() * types.length)];
            const extraPoints = 2;
            cars.push(this.createCar(type, extraPoints, player));
        }
        return cars;
    }
}

function compare(cars) {
    const maxPowerReserve = Math.max(...cars.map((car) => car.powerReserve));
    const maxDurability = Math.max(...cars.map((car) => car.totalDurability));
    const maxSpeed = Math.max(...cars.map((car) => car.totalSpeed));

    return cars.map((car) => ({
        player: car.player,
        powerReserve: Math.ceil((car.powerReserve / maxPowerReserve) * 100),
        durability: Math.ceil((car.totalDurability / maxDurability) * 100),
        speed: Math.ceil((car.totalSpeed / maxSpeed) * 100),
        name: car.name,
    }));
}
export default function compare(cars) {
    let powerReserveMax = 0;
    let durabilityMax = 0;
    let speedMax = 0;

    const comparedCars = new Array();

    let totalDistance = null;
    let totalSpeed = null;
    let totalDurability = null;

    for (let car of cars) {
        totalDistance = car.totalDistance();
        totalSpeed = car.totalSpeed();
        totalDurability = car.totalDurability();

        powerReserveMax = Math.max(totalDistance, powerReserveMax);
        speedMax = Math.max(totalSpeed, speedMax);
        durabilityMax = Math.max(totalDurability, durabilityMax);
    }

    for (let car of cars) {
        comparedCars.push({
            distance: Math.floor((car.totalDistance() * 100) / powerReserveMax),
            speed: Math.floor((car.totalDurability() * 100) / durabilityMax),
            durability: Math.floor((car.totalSpeed() * 100) / speedMax),
            name: car.name
        });
    }

    return comparedCars; //[]
}

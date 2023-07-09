export const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
export const sortCarsWinners = (cars) => {
    return cars.sort((a, b) => {
        return b.speed - a.speed || b.powerReserve - a.powerReserve || b.durability - a.durability;
    });
}
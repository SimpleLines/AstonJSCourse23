import Car from "../Classes/Cars/Car.mjs";


export default function CarModification(car, paramsToUpgrade) {

    if (!(car instanceof Car)) throw new Error('Вы должны поменстить объект Класса Car или его наследников')

    let { speed, fuel, durability, lowFuelConsumption } = paramsToUpgrade;
    let pointsToUpgrade = speed + fuel + durability + lowFuelConsumption;
    
    if (pointsToUpgrade > 2) throw new Error('У вас есть только 2 очка для улучшения')
    let pointsToSpend = 2 - pointsToUpgrade;
    if (pointsToSpend == 1) throw new Error('У вас есть еще 1 очко для улучшения')
    if (pointsToSpend == 2) throw new Error('Рекомендую вам улучшить свою машину!')

    for (let key in paramsToUpgrade) {
        if (key != 0) car[key] += paramsToUpgrade[key];
    }

    return car
}
export default class Track {
  constructor(trackLength) {
    this.trackLength = trackLength;
  }

  race(cars) {
    const results = [];

    for (let i = 0; i < cars.length; i++) {
      const car = cars[i];

      const time = this.trackLength / car.calculateTotalSpeed();

      results.push({
        name: car.name,
        time,
      });
    }

    results.sort((a, b) => a.time - b.time);

    return results;
  }
}
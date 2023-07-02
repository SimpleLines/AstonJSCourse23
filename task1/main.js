let arrayAllObjectsCars = [];
let newCar = {};
let showModal = document.querySelector('.modal');
let buttonCars = document.querySelector('.cars');
let start = document.querySelector('.start');

class CivilianCar{
  constructor(fuel = 0, lowFuelConsumption = 0, durability = 0, speed = 0){
    this.fuel = 2 + fuel;
    this.lowFuelConsumption = 2 + lowFuelConsumption;
    this.durability = 2 + durability;
    this.speed = 4 + speed; 
    this.name = 'Civilian Car ' + getRandomInt(100);
  }
}
class SportCar{
  constructor(fuel = 0, lowFuelConsumption = 0, durability = 0, speed = 0){
    this.count = 0;
    this.fuel = 2 + fuel;
    this.lowFuelConsumption = 1 + lowFuelConsumption;
    this.durability = 1 + durability;
    this.speed = 6 + speed;
    this.name = 'Sport Car ' + getRandomInt(100);
  }
}
class MilitaryCar{
  constructor(fuel = 0, lowFuelConsumption = 0, durability = 0, speed = 0){
    this.fuel = 2 + fuel;
    this.lowFuelConsumption = 2 + lowFuelConsumption;
    this.durability = 4 + durability;
    this.speed = 2 + speed; 
    this.name = 'Military Car ' + getRandomInt(100);
  }
}
buttonCars.addEventListener('click', (event) => {   
  if(event.target.className === 'cars__civilian'){
    newCar = new CivilianCar();
  } else if(event.target.className === 'cars__sport'){
    newCar = new SportCar();
  } else {
    newCar = new MilitaryCar();    
  }  
  showAndDistributingCharacteristics(newCar);
  buttonCars.classList.add('modal');    
  showModal.classList.add('show');   
})
function showAndDistributingCharacteristics(obj){
  let inputFuel = showModal.querySelector('.fuel__input');
  let inputLowFuelConsumption = showModal.querySelector('.lowFuelConsumption__input');
  let inputDurability = showModal.querySelector('.durability__input');
  let inputSpeed = showModal.querySelector('.speed__input');
  let plusButtonFuel = showModal.querySelector('.fuel__plus');
  let minusButtonFuel = showModal.querySelector('.fuel__minus');
  let plusButtonLowFuelConsumption = showModal.querySelector('.lowFuelConsumption__plus');
  let minusButtonLowFuelConsumption = showModal.querySelector('.lowFuelConsumption__minus');
  let plusDurability = showModal.querySelector('.durability__plus');
  let minusDurability = showModal.querySelector('.durability__minus');
  let plusSpeed = showModal.querySelector('.speed__plus');
  let minusSpeed = showModal.querySelector('.speed__minus');
  let modalСharacteristicsСlose = showModal.querySelector('.modal__characteristics-close');
  let count = 2;

  inputFuel.value = obj.fuel;
  inputLowFuelConsumption.value = obj.lowFuelConsumption;
  inputDurability.value = obj.durability;
  inputSpeed.value = obj.speed;

  plusButtonFuel.addEventListener('click', () => {       
    if(count){
      count--; 
      inputFuel.value = +inputFuel.value + 1;         
    } else {
      throw new Error("Превышен лимит распределяемых очков");
    }        
  });
  minusButtonFuel.addEventListener('click', () => { 
    inputFuel.value = +inputFuel.value - 1;
    if(+inputFuel.value < +obj.fuel){
      inputFuel.value = +obj.fuel;
    }
    count++;            
  });
  plusButtonLowFuelConsumption.addEventListener('click', () => {      
    if(count){        
      count--;
      inputLowFuelConsumption.value = +inputLowFuelConsumption.value + 1;        
    } else {
      throw new Error("Превышен лимит распределяемых очков");
    }                  
  });
  minusButtonLowFuelConsumption.addEventListener('click', () => { 
    inputLowFuelConsumption.value = +inputLowFuelConsumption.value - 1;
    if(+inputLowFuelConsumption.value < +obj.lowFuelConsumption){
      inputLowFuelConsumption.value = +obj.lowFuelConsumption;
    }
    count++;         
  });  
  plusDurability.addEventListener('click', () => {      
    if(count){
      count--;
      inputDurability.value = +inputDurability.value + 1;        
    } else {
      throw new Error("Превышен лимит распределяемых очков");
    }                     
  });
  minusDurability.addEventListener('click', () => { 
    inputDurability.value = +inputDurability.value - 1;
    if(+inputDurability.value < +obj.durability){
      inputDurability.value = +obj.durability;
    }
    count++;         
  });   
  plusSpeed.addEventListener('click', () => {      
    if(count){
      count--;
      inputSpeed.value = +inputSpeed.value + 1;        
    } else {
      throw new Error("Превышен лимит распределяемых очков");
    }                         
  });
  minusSpeed.addEventListener('click', () => { 
    inputSpeed.value = +inputSpeed.value - 1;
    if(+inputSpeed.value < +obj.speed){
      inputSpeed.value = +obj.speed;
    }
    count++;         
  });   
  modalСharacteristicsСlose.addEventListener('click', () => {
    let preparationCars = document.querySelector('.preparation__cars');      
    let objResult = {
      fuel: +inputFuel.value,
      lowFuelConsumption: +inputLowFuelConsumption.value,
      durability: +inputDurability.value,
      speed: +inputSpeed.value,
      name: obj.name + ' Player',
    }
    creatingRandomCars(objResult);  
    preparationCars.classList.add('modal');
    start.classList.add('visible');
  });
}
function creatingRandomCars(obj){
  let random = 0;
  for(let i = 0; i < 7; i += 1){
    random = getRandomInt(4);
    if(random === 1){
      arrayAllObjectsCars.push(new CivilianCar(0, 0, random, random));
    } else if(random === 2){
      arrayAllObjectsCars.push(new MilitaryCar(random, 0, 0, 0));
    } else if(random === 3){
      arrayAllObjectsCars.push(new SportCar(0, 1, 0, 1));
    }
  }
  arrayAllObjectsCars.push(obj);
  let arrReadyCars = compare(arrayAllObjectsCars);
  for(let i = 0; i < arrReadyCars.length; i += 1){
    createRaceTrack(arrReadyCars[i]);
  }
}
let compare = function(cars){
  let arrayCarsPowerReserve = cars?.map(item => {
    return {
      powerReserve: (5 + item.fuel) * 200 + (5 + item.fuel) * 0.1 * 200 * item.lowFuelConsumption,
      durability: 100 + item.durability * 0.1 * 100,
      speed: 10 + item.speed * 0.05 * 10,
      name: item.name,
    }
  });
  let maxPowerReserve = getMaxValue(arrayCarsPowerReserve, 'powerReserve');
  let minPowerReserve = getMinValue(arrayCarsPowerReserve, 'powerReserve');
  let maxDurability = getMaxValue(arrayCarsPowerReserve, 'durability');
  let minDurability = getMinValue(arrayCarsPowerReserve, 'durability');
  let maxSpeed = getMaxValue(arrayCarsPowerReserve, 'speed');
  let minSpeed = getMinValue(arrayCarsPowerReserve, 'speed');
  arrayCarsPowerReserve = arrayCarsPowerReserve.map(item => {
    return {
      powerReserve: Math.round(100 * (item.powerReserve - minPowerReserve.powerReserve) / (maxPowerReserve.powerReserve - minPowerReserve.powerReserve)) + '%',
      durability: Math.round(100 * (item.durability - minDurability.durability) / (maxDurability.durability - minDurability.durability)) + '%',
      speed: Math.round(100 * (item.speed - minSpeed.speed) / (maxSpeed.speed - minSpeed.speed)) + '%',
      name: item.name,
    }
  });
  return arrayCarsPowerReserve;
}
let createRaceTrack = function(obj){
  let createTotalDiv = document.createElement('div');
  createTotalDiv.style.width = '520px';
  createTotalDiv.style.height = '80px';  
  createTotalDiv.style.margin = '0 auto';
  createTotalDiv.className = obj.name;
  start.append(createTotalDiv);
  let createPowerReserveSpan = document.createElement('span');
  createPowerReserveSpan.innerHTML = 'Запас хода: ' + obj.powerReserve + ', ';
  createTotalDiv.append(createPowerReserveSpan);
  let createDurabilitySpan = document.createElement('span');
  createDurabilitySpan.innerHTML = '  Общая прочность: ' +  obj.durability + ', ';
  createTotalDiv.append(createDurabilitySpan);
  let createSpeedSpan = document.createElement('span');
  createSpeedSpan.innerHTML ='  Общая скорость: ' + obj.speed;
  createTotalDiv.append(createSpeedSpan);
  let createCarDiv = document.createElement('div');
  createCarDiv.style.width = '120px';
  createCarDiv.style.height = '40px';
  createCarDiv.style.background = 'red';
  createCarDiv.style.borderRadius = '40%';
  createCarDiv.style.marginLeft = 'auto';
  createCarDiv.style.marginRight = 'auto';  
  createCarDiv.style.marginTop = '10px';
  createCarDiv.style.marginBottom = '0';
  createCarDiv.style.paddingTop = '4px';
  createCarDiv.style.color = 'white';
  createCarDiv.innerHTML = obj.name;
  createTotalDiv.append(createCarDiv);
  
  return createTotalDiv;
}
function getMaxValue(arr, value){
  return arr?.reduce((acc, item) => {
    return acc[value] > item[value] ? acc : item;
  },{});
}
function getMinValue(arr, value){
  return arr?.reduce((acc, item) => {
    return acc[value] < item[value] ? acc : item;
  },{});
}
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
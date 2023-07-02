function Company(name, salary){
  this.name = { 
    value: name,
    writable: false
  };
  this.salary = { 
    value: salary, 
    writable: false
  }; 
  Company.addStaff({name: this.name.value, income: 0});
  this.income = function(value){    
    let index = Company.store.staffList.findIndex(item => item.name === this.name.value);
    let obj = Company.store.staffList[index];
    let newObj = {
      ...obj, 
      income: obj.income += (value - this.salary.value)
    }
    Company.store.staffList = [...Company.store.staffList.slice(0, index), newObj, ...Company.store.staffList.slice(index + 1)];
    Company.store.money += (value - this.salary.value);
    return Company;
  }
  this.spend = function(value){
    let index = Company.store.staffList.findIndex(item => item.name === this.name.value);
    let obj = Company.store.staffList[index];
    let newObj = {
      ...obj, 
      income: obj.income -= value
    }
    Company.store.staffList = [...Company.store.staffList.slice(0, index), newObj, ...Company.store.staffList.slice(index + 1)];
    Company.store.money -= value;
    return Company;
  }
}
Company.addStaff = function(staff) {
  this.store.staffList.push(staff);  
  this.store.countStaff++;
  return this;
}
Company.store = {
  staffList: [],
  countStaff: 0,
  money: 0,
}
Company.getLeaders = function() {
  let firstNumber = this.store.staffList[0].income;
  let arr = this.store.staffList;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i].income > firstNumber) {
      firstNumber = arr[i].income;
    }
  }
  let arrayMaxIncome = arr.filter(function(item) {
    return item.income === firstNumber;
  });
  return arrayMaxIncome;
}
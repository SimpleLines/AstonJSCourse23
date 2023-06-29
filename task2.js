function Company(name, salary) {
  Object.defineProperties(this, {
    'name': {
      value: name,
    },
    'salary': {
      value: salary,
    },
    'incomeValue': {
      value: 0,
      writable: true,
    },
  });

  this.income = function(value) {
    Company.store.money += value - salary;
    this.incomeValue += value - salary;
    Company.store.staffList.find((elem) => elem.name === this.name).income = this.incomeValue;
  };

  this.spend = function(value) {
    Company.store.money -= value;
    this.incomeValue -= value;
    Company.store.staffList.find((elem) => elem.name === this.name).income = this.incomeValue;
  };

  Company.addStaff({name: this.name, income: this.incomeValue});
};

Company.store = {
  staffList: [], 
  countStaff: 0, 
  money: 0, 
};

Company.addStaff = function(staff){
  Company.store.staffList.push(staff);
  Company.store.countStaff += 1;
};

Company.getLeaders = function() {
  if (Company.store.staffList.length > 1) {
    Company.store.staffList.sort((a, b) => b.income - a.income);
    const [firstPlace, secondPlace] = Company.store.staffList;
    return [firstPlace, secondPlace];
  };
  return Company.store.staffList;
};
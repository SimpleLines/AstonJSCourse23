function Company(name, salary) {
  this.name = name;
  this.salary = salary;
  this.income = function (value) {
    Company.store.money += value - this.salary;
    for (let i = 0; i < Company.store.staffList.length; i++) {
      if (Company.store.staffList[i].name === this.name) {
        Company.store.staffList[i].income += value - this.salary;
        break;
      }
    }
  };
  this.spend = function (value) {
    Company.store.money -= value;
  };
  Company.addStaff(this);
}

Company.store = {
  staffList: [],
  countStaff: 0,
  money: 0,
};

Company.addStaff = function (staff) {
  Company.store.staffList.push({ name: staff.name, income: 0 });
  Company.store.countStaff++;
};

Company.getLeaders = function () {
  let max = 0;
  Company.store.staffList.forEach((el) => {
    if (el.income > max) {
      max = el.income;
    }
  });
  return this.store.staffList.filter((el) => el.income === max);
};

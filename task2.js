function Company(name, salary) {
  this.name = name;
  this.salary = salary;
  this.incomeValue = 0;
  defineProperties(this, { name, salary });
  Company.addStaff({ name, income: 0 });
}

Company.store = {
  staffList: [],
  countStaff: 0,
  money: 0,
};

Company.addStaff = function (staff) {
  Company.store.staffList.push(staff);
  Company.store.countStaff++;
};

function defineProperties(obj, properties) {
  const propKeys = Object.keys(properties);
  propKeys.forEach((propKey) =>
    Object.defineProperty(obj, propKey, {
      value: properties[propKey],
      writable: false,
    })
  );
}

Company.getLeaders = function () {
  const staffList = [...Company.store.staffList];
  let maxIncome = 0;
  const staffQuantity = staffList.length;
  for (let i = 0; i < staffQuantity; i++) {
    const income = staffList[i].income;
    if (maxIncome < income) {
      maxIncome = income;
    }
  }
  return staffList.filter((staff) => staff.income === maxIncome);
};

Company.prototype.income = function (value) {
  const incomeValue = value - this.salary;
  Company.store.money += incomeValue;
  const staff = findStaff(this.name);
  staff.income += incomeValue;
};

Company.prototype.spend = function (value) {
  Company.store.money -= value;
  const staff = findStaff(this.name);
  staff.income -= value;
};

function findStaff(name) {
  const staff = Company.store.staffList.find((staff) => staff.name === name);
  return staff;
}
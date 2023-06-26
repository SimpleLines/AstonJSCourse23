Array.prototype.filterArray = function (cb, thisArg) {
  const newArr = [];
  let callback = cb.bind(thisArg);

  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      newArr.push(this[i]);
    }
  }

  return newArr;
};

function Company(name, salary) {
  this.name = name;
  this.salary = salary;

  Company.addStaff({ name, income: 0 });

  this.income = function (value) {
    Company.store.money += value - this.salary;
    Company.store.staffList.find((el) => this.name === el.name).income += value - this.salary;
  };

  this.spend = function (value) {
    Company.store.money -= value;
    Company.store.staffList.find(el => this.name === el.name).income -=value
  };
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

Company.getLeaders = function () {
  let copyStaffList = [...Company.store.staffList];
  let sortCopyStaffList = copyStaffList.sort((a, b) => b.income - a.income);
  let maxValue = sortCopyStaffList[0].income
  return Company.store.staffList.filter((el) => el.income === maxValue);
};









// задача 1
Array.prototype.filterArray = function (cb, thisArg) {
  const newArray = [];
  for (let i = 0; i < this.length; i++) {
    if (cb.call(thisArg, this[i], i, this)) {
      newArray.push(this[i]);
    }
  }
  return newArray;
};


// задача 2
function Company(name, salary) {
  Object.defineProperties(this, {
    name: {
      value: name,
      writable: false,
    },
    salary: {
      value: salary,
      writable: false,
    },
  });

  Company.addStaff({ name: this.name, income: 0 });
}

Company.addStaff = function (staff) {
  let duplicate = Company.store.staffList.some(
    (item) => item.name === staff.name
  );
  if (!duplicate) {
    Company.store.staffList.push(staff);
    Company.store.countStaff++;
  }
  return Company;
};

Company.store = {
  staffList: [],
  countStaff: 0,
  money: 0,

  getLeaders: function () {
    let maxIncome = Math.max(...this.staffList.map((item) => item.income));
    let arrayMaxIncome = this.staffList.filter(function (item) {
      return item.income === maxIncome;
    });
    return arrayMaxIncome;
  },
};

Company.prototype.income = function (value) {
  let index = Company.store.staffList.findIndex(
    (item) => item.name === this.name
  );

  let newObj = {
    ...Company.store.staffList[index],
    income: Company.store.staffList[index].income + value - this.salary,
  };

  Company.store.staffList.splice(index, 1, newObj);

  Company.store.money += value - this.salary;
  return Company;
};

Company.prototype.spend = function (value) {
  let index = Company.store.staffList.findIndex(
    (item) => item.name === this.name
  );

  let newObj = {
    ...Company.store.staffList[index],
    income: Company.store.staffList[index].income - value,
  };

  Company.store.staffList.splice(index, 1, newObj);

  Company.store.money -= value;
  return Company;
};


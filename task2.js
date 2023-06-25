function Company(name, salary) {
  Company.addStaff = function (staff) {
    staffList.push(staff);
    store.countStaff = staffList.length;
  };
  Company.getLeaders = function () {
    const maxIncome = [...staffList].sort((a, b) => b.income - a.income)[0]
      .income;
    return staffList.filter((staff) => staff.income === maxIncome);
  };

  const {
    store,
    store: { staffList },
    addStaff,
  } = Company;

  this.income = function (value) {
    const staff = staffList.find((el) => el.name === this.name);
    const sum = salary > value ? salary - value : value - salary;
    staff.income += sum;
    store.money += sum;
  };

  this.spend = function (value) {
    const staff = staffList.find((el) => el.name === this.name);
    const sum = value + salary;
    staff.income -= sum;
    store.money -= sum;
  };

  Object.defineProperties(this, {
    name: {
      get: () => name,
    },
    salary: {
      get: () => salary,
    }, // Без set нельзя изменить значение
  });

  addStaff({ name, income: 0 });
}

Company.store = {
  staffList: [],
  countStaff: 0,
  money: 0,
};
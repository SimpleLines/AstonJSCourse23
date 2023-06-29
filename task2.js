function Company(name, salary) {
  this.name = name;
  this.salary = salary;

  Company.addStaff({ name: this.name, income: 0 });
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
  const maxIncome = Math.max(
    ...Company.store.staffList.map((staff) => staff.income)
  );
  return Company.store.staffList.filter((staff) => staff.income === maxIncome);
};

Company.prototype.income = function (value) {
  const incomeValue = value - this.salary;
  Company.store.money += incomeValue;
  const staff = Company.store.staffList.find((s) => s.name === this.name);
  staff.income += incomeValue;
};

Company.prototype.spend = function (value) {
  Company.store.money -= value;
};

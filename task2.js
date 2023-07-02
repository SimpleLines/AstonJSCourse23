function Company(name, salary) {
  Object.defineProperties(this, {
    name: { value: name, writable: false },
    salary: { value: salary, writable: false },
  });

  Company.addStaff({ name, income: 0 });

  this.income = function(value) {
    const staff = Company.getStaff(this.name);

    Company.store.money += value - this.salary;
    staff.income += value - this.salary;
  };

  this.spend = function(value) {
    const staff = Company.getStaff(this.name);

    Company.store.money -= value;
    staff.income -= value;
  };
}

Company.store = {
  staffList: [],
  countStaff: 0,
  money: 0,
};

Company.getStaff = function(name) {
  return Company.store.staffList.find((staff) => staff.name === name);
};

Company.addStaff = function(staff) {
  Company.store.staffList.push(staff);
  Company.store.countStaff++;
};

Company.getLeaders = function() {
  let maxIncome = 0;
  const leaders = [];

  for (let staff of Company.store.staffList) {
    if (staff.income > maxIncome) {
      maxIncome = staff.income;
      leaders.length = 0;
      leaders.push(staff);
    } else if (staff.income === maxIncome) {
      leaders.push(staff);
    }
  }

  return leaders;
};

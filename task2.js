function Company(name, salary) {
  const _name = name;
  const _salary = salary;

  Company.addStaff({name, income: 0});

  this.income = function(value) {
    const staff = Company.store.staffList.find((staff) => staff.name === _name);
    if (staff) {
      Company.store.money += value - _salary;
      staff.income += value - _salary;
    }
  }

  this.spend = function(value) {
    const staff = Company.store.staffList.find((staff) => staff.name === _name);
    if (staff) {
      Company.store.money -= value;
      staff.income -= value;
    }
  }
}

Company.store = {
  staffList: [],
  countStaff: 0,
  money: 0,
}

Company.addStaff = function(staff) {
  Company.store.staffList.push(staff);
  Company.store.countStaff++;
}

Company.getLeaders = function() {
  const leaders = [];
  let maxIncome = -Infinity;

  Company.store.staffList.forEach((staff) => {
    if (staff.income > maxIncome) {
      maxIncome = staff.income;
      leaders.length = 0;
      leaders.push(staff);
    } else if (staff.income === maxIncome) {
      leaders.push(staff);
    }
  });

  return leaders;
}
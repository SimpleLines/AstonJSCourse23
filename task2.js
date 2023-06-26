function Company(name, salary) {
  const staff = {
    name,
    income: 0,
  };
  this.income = (value) => {
    Company.store.money += value - salary;
    staff.income += value - salary;
  };
  this.spend = (value) => {
    Company.store.money -= value;
    staff.income -= value;
  };
  Company.addStaff(staff);
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
  let maxIncome = Company.store.staffList.reduce(
    (acc, el) => (el.income > acc ? el.income : acc),
    0
  );
  return Company.store.staffList.filter((el) => el.income == maxIncome);
};

function Company(name, salary) {
  Object.defineProperty(this, "name", { value: name, writable: false });
  Object.defineProperty(this, "salary", { value: salary, writable: false });
  Object.defineProperty(this, "income", { value: 0, writable: true });

  Company.store.staffList.push(this);
  Company.store.countStaff++;
}
Company.store = {
  staffList: [],
  countStaff: 0,
  money: 0,
};
Company.addStaff = function (staff) {
  const newStaff = new Company(staff.name, staff.salary);
  Company.store.staffList.push(newStaff);
  Company.store.countStaff++;
};
Company.getLeaders = function () {
  const sortedStaffList = Company.store.staffList.sort(
    (a, b) => b.income - a.income
  );
  const maxIncome = sortedStaffList[0].income;
  return sortedStaffList.filter((item) => item.income === maxIncome);
};
Company.prototype.income = function (value) {
  Company.store.money += value - this.salary;
  this.income += value - this.salary;
};
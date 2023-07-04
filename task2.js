function Company(name, salary) {
    this.name = name;
    this.salary = salary;

    this.income = function (value) {
        Company.store.money += value - this.salary;
        let worker = Company.store.staffList.find(item => this.name === item.name);
        worker.income += value - this.salary;
    };
    this.spend = function (value) {
        Company.store.money -= value;
    };
};

Company.store = {
    staffList: [],
    countStaff: 0,
    money: 0,
};

Company.addStaff = function (staff) {
    Company.store.staffList.push({ name:staff.name, income: 0 });
    Company.store.countStaff++;
};

Company.getLeaders = function () {
    const workersArr = Company.store.staffList;
    const sortedArr = workersArr.sort((a, b) => b.income - a.income);
    return sortedArr;
};


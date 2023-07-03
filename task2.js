function Company(name, salary) {
    Object.defineProperties(this, {
        name: {
            value: name,
            writable: false,
            configurable: false,
        },
        salary: {
            value: salary,
            writable: false,
            configurable: false,
        }
    });
    Company.addStaff({ name, income: 0 });

    this.income = function(value) {
        Company.store.money += value - this.salary;
        let employee = Company.store.staffList.find(item => this.name === item.name);
        employee.income += value - this.salary;
    };
    this.spend = function(value) {
        Company.store.money -= value;
        let employee = Company.store.staffList.find(item => this.name === item.name);
        employee.income -= value;
    };
}

Company.store = {
    staffList: [],
    countStaff: 0,
    money: 0,
};

Company.addStaff = function(staff) {
    Company.store.staffList.push(staff);
    Company.store.countStaff++;
};

Company.getLeaders = function() {
    let maxIncome = 0;
    const leaders = [];

    for (const staff of Company.store.staffList) {
        if (staff.income > maxIncome) {
            maxIncome = staff.income;
        }
    }
    for (const staff of Company.store.staffList) {
        if (staff.income === maxIncome) {
            leaders.push(staff);
        }
    }
    return leaders;
};
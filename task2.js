function Company(name, salary) {

    this.name = name;
    this.salary = salary;

    Company.addStaff({ name, income: 0 });

    this.income = function (value) {
        let income = value - this.salary
        Company.store.money += income
        let currentPerson = Company.store.staffList.find((person) => this.name === person.name)
        currentPerson.income += income
    }

    this.spend = function (value) {
        Company.store.money -= value
        let currentPerson = Company.store.staffList.find((person) => this.name === person.name)
        currentPerson.income -= value
    }
}

Company.getLeaders = function () {
    let copy = Company.store.staffList.slice(0)
    let sorted = copy.sort((x, y) => y.income - x.income);

    return [sorted[0], sorted[1]]
}

Company.store = {
    staffList: [],
    countStaff: 0,
    money: 0,
}

Company.addStaff = function (staff) {
    Company.store.staffList.push(staff);
    Company.store.countStaff++;
}
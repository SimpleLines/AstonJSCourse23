function Company(name, salary) {
    this._name = name
    this._salary = salary

    this.income = function (value) {
        Company.store.money += value - this._salary
        Company.store.staffList = Company.store.staffList.map(el => el.name === this._name ? {
            ...el,
            income: el.income + value - salary
        } : el)
    }
    this.spend = function (value) {
        Company.store.money -= value
        Company.store.staffList = Company.store.staffList.map(el => el.name === this._name ? {
            ...el,
            income: el.income - value
        } : el)
    }
    Company.addStaff({name, income: 0})
}

Company.store = {
    staffList: [],
    countStaff: 0,
    money: 0,
}
Company.addStaff = function (staff) {
    Company.store.staffList.push(staff)
    this.store.countStaff++
}
Company.getLeaders = function () {
    const sortedStaffList = this.store.staffList.sort((a, b) => b.income - a.income)
    const maxIncome = sortedStaffList[0]?.income
    return sortedStaffList.filter(item => item.income === maxIncome)
}


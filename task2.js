function Company(name, salary) {
  Company.store = {
    staffList: [],
    countStaff: 0,
    money: 0
  }

  const store = Company.store;

  Company.addStaff = function({_name, _salary}) {
    store.staffList.push({name: _name, income: 0 - _salary});
    store.money -= _salary;
    store.countStaff++;
  }

  Company.getLeaders = function() {
    let copy = JSON.parse(JSON.stringify(store.staffList));
    copy.sort((a, b) => a.income + b.income);
    return copy.slice(copy.length - 2).reverse();
  }

  this._name = name;
  this._salary = salary;

  this.income = function(value) {
    Company.store.money += value;
    let curr = Company.store.staffList.find((el) => el.name === this._name);
    curr.income += value;
  }

  this.spend = function(value) {
    Company.store.money -= value;
    let curr = Company.store.staffList.find((el) => el.name === this._name);
    curr.income -= value;
  }
}
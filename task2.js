function Company(name, salary){
    Object.defineProperties(this, {
        name: {
            value: name,
            writable: false,
        },
        salary:{
            value:salary,
            writable:false
        }
    })
    Company.addStaff({name, income:0})

    this.income = function(value){
        let result = value - this.salary;
        Company.store.money += result
        let personName = Company.store.staffList.find((item) => this.name === item.name)
        personName.income += result
    }
    this.spend = function(value){
        Company.store.money -= value;
        let personName = Company.store.staffList.find((item) => this.name === item.name)
        personName.income -= value
    }
    
}

Company.store = {
    staffList: [],
    countStaff: 0,
    money: 0,
}

Company.addStaff = function(staff){
    Company.store.staffList.push(staff)
    Company.store.countStaff++
}

Company.getLeaders = function(){
    let maxIncome = Math.max(...(Company.store.staffList.map((item)=> item.income)))
    return Company.store.staffList.filter((item)=> item.income == maxIncome)
}



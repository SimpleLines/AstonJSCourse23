Задача 2.
Есть функция - конструктор Company (name, salary).
У Company есть статическое свойство store, значение которого представляет из
себя объект и хранит в себе всю информацию о компании. Вот пример store с
установленными значениями по умолчанию:
{
staffList: [], // список сотрудников
countStaff: 0, // количество всех сотрудников
money: 0, // общий бюджет компании
}
Статическое свойство/метод — это такое свойство/метод, которое доступно только
из класса или функции конструктора из вне. То есть к статическому свойству store
можно обратиться вот так: Company.store.
У Company есть статический метод addStaff(staff), который добавляет нового
сотрудника staff в конец списка сотрудников staffList объекта store. Так же всякий

раз при добавлении нового сотрудника значение countStaff объекта store должно
увеличиваться на 1.
Аргумент staff функции addStaff(staff) представляет собой объект типа:
{
name, // имя сотрудника, строка
income, // общая прибыль сотрудника, число
}
У Company есть статический метод getLeaders (), который возвращает массив
сотрудников, у которых самая большая прибыль за всю историю работы в
компании.
Для того, чтобы создать нового сотрудника нужно вызвать
new Company(name, salary);
При это сотрудник представляет собой объект типа
{
income(value), // метод
spend(value), // метод
}
где income и spend — это собственные методы объекта.
Важно, что после создания нового объекта сотрудника не должно быть
возможным изменять у него имя name и зарплату salary.
метод income(value) должен увеличивать бюджет компании на value - salary
условных единиц.
метод spend(value) должен уменьшать бюджет компании на value условных
единиц.
Любое изменение бюджета, добавление сотрудника должно изменять объект
store, чтобы он хранил в себе актуальную информацию.
➢ Пример:
const alex = new Company('Alex', 1000);
const max = new Company('Max', 250);
const peter = new Company('Peter', 250);
const john = new Company('John', 250);
alex.income(500);
alex.spend(2500);

max.income(500);
peter.income(500);
peter.income(500);
john.income(750);
Company.store
/*
результат Company.store
{
staffList: [
{ name: 'Alex', income: -3000 },
{ name: 'Max', income: 250 },
{ name: 'Peter', income: 500 },
{ name: 'John', income: 500 }
],
countStaff: 4,
money: -1750
}
*/
Company.getLeaders()
/*
результат вызова метода Company.getLeaders()
[ { name: 'Peter', income: 500 }, { name: 'John', income: 500 } ]
*/
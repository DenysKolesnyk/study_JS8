let money = 45654;
let income = 'Freelance';
let addExpenses = 'Food, Gas, Trip' ;
let deposit = true;
let mission = 100000;
let period = 11;

console.log(typeof(money));
console.log(typeof(income));
console.log(typeof(deposit));
console.log(income.length);
console.log('Период ', period ,' месяцев');
console.log('Цель заработать ', mission ,' долларов США');
addExpenses = addExpenses.toLocaleLowerCase();
console.log(addExpenses.split(', '));

let budgetDay = money / 30;
console.log('Дневной бюджет:', budgetDay,'\nОстаток деления:', money % 30);
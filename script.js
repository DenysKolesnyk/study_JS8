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

money = +prompt('Ваш месячный доход?', 1000);

addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую',);
console.log(addExpenses.split(', '));

deposit = confirm('Есть ли у вас депозит в банке?');

console.log(money, income, deposit);

let monthExpenseName1 = prompt('Какие обязательные ежемесячные расходы у вас есть?');
let monthExpenseSum1 = +prompt('Во сколько это обойдется?');
let monthExpenseName2 = prompt('Какие обязательные ежемесячные расходы у вас есть?');;
let monthExpenseSum2 = +prompt('Во сколько это обойдется?');;

let budgetMonth = money - monthExpenseSum1 - monthExpenseSum2;
console.log('доход за месяц', budgetMonth);

console.log('Цель будет достигнута через:', Math.ceil(mission / budgetMonth), 'мес.');

budgetDay = Math.floor ( budgetMonth / 30);
console.log ('Бюджет на день:', budgetDay);


if(budgetDay > 800) {
    console.log('Высокий уровень дохода');
} else if(budgetDay > 300 && budgetDay <= 800) {
    console.log('Средний уровень дохода');
} else if(budgetDay > 0 && budgetDay <= 300) {
    console.log('Низкий уровень дохода');
}else if(budgetDay == 0) {
    console.log('У вас нет дохода');
} else if(budgetDay < 0) {
    console.log('Что то пошло не так');
}
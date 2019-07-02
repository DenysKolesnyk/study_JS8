let money = 45654;
let income = 'Freelance';
let addExpenses = 'Food, Gas, Trip' ;
let deposit = true;
let mission = 100000;
let period = 11;

let showTypeof = function(item) {
    console.log(item, typeof item);
};

showTypeof(money);
showTypeof(income);
showTypeof(deposit);

addExpenses = addExpenses.toLocaleLowerCase();

let budgetDay = money / 30;

money = +prompt('Ваш месячный доход?', 1000);

addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую','Tax, Gas');

deposit = confirm('Есть ли у вас депозит в банке?');

let monthExpenseName1 = prompt('Какие обязательные ежемесячные расходы у вас есть?', 'Internet');
let monthExpenseSum1 = +prompt('Во сколько это обойдется?', 100);
let monthExpenseName2 = prompt('Какие обязательные ежемесячные расходы у вас есть?', 'Phone');;
let monthExpenseSum2 = +prompt('Во сколько это обойдется?', 250);;

let budgetMonth = money - monthExpenseSum1 - monthExpenseSum2;

budgetDay = Math.floor ( budgetMonth / 30);

function getStatusIncome(){
    if(budgetDay > 800) {
        return('Высокий уровень дохода');
    } else if(budgetDay > 300 && budgetDay <= 800) {
        return('Средний уровень дохода');
    } else if(budgetDay > 0 && budgetDay <= 300) {
        return('Низкий уровень дохода');
    }else if(budgetDay == 0) {
        return('У вас нет дохода');
    } else if(budgetDay < 0) {
        return('Что то пошло не так');
    }
}
console.log('getStatusIncome() ', getStatusIncome());

function getExpensesMonth(a, b){
    return (a + b);
}

console.log('Все расходы за месяц: ', getExpensesMonth(monthExpenseSum1, monthExpenseSum2));

function getAccumulatedMonth(a, b, c){
    return(a - b - c)
}

let accumulatedMonth = getAccumulatedMonth(money, monthExpenseSum1, monthExpenseSum2);

console.log('Накопления за месяц ', accumulatedMonth);

function getTargetMonth(item){
    return Math.floor(item / 30);
}

console.log('Цель будет достигнута через:', getTargetMonth(accumulatedMonth), 'мес.');
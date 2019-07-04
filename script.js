let money;
let income = 'Freelance';
let addExpenses = 'Food, Gas, Trip' ;
let deposit = true;
let mission = 100000;
let period = 11;

addExpenses = addExpenses.toLocaleLowerCase();

let budgetDay = money / 30;


addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую','Tax, Gas');
deposit = confirm('Есть ли у вас депозит в банке?');


let start = function(){
    
    do{
        money = prompt('Ваш месячный доход?', 1000);
    }
    
    while(isNaN(money) || money == ' ' || money == null);
};

start();

let monthExpenseName1;
let monthExpenseName2;


let expensesMonth = function(){
    let sum = 0;
    let sum1;

    for(let i = 0; i < 2; i++){
        if(i === 0){
            monthExpenseName1 = prompt('Какие обязательные ежемесячные расходы у вас есть?', 'Internet');
        } else if(i === 1){
            monthExpenseName2 = prompt('Какие обязательные ежемесячные расходы у вас есть?', 'Phone');
        }   
        do{
            sum1 = prompt('Во сколько это обойдется?', 100);
        }
            while(isNaN(sum1) || sum1 == ' ' || sum1 == null);

            sum += +sum1;
    }
    return sum;
};

let expensesAmount = expensesMonth();

let budgetMonth = money - expensesAmount;

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
console.log('Дневной бюджет: ', getStatusIncome());


console.log('Все расходы за месяц: ', expensesAmount);

function getAccumulatedMonth(a, b){
    return(a - b);
}

let accumulatedMonth = getAccumulatedMonth(money, expensesAmount);

console.log('Накопления за месяц ', accumulatedMonth);

function getTargetMonth(item){
    if(item < 0) {
        return ('Цель не будет достигнута');
    } else {
        return ('Цель будет достигнута через:') + Math.floor(item / 30) + ('мес.');
    }
     
}

console.log(getTargetMonth(accumulatedMonth));
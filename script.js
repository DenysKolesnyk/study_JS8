'use strict';

let money;

let start = function(){
    
    do{
        money = prompt('Ваш месячный доход?', 1000);
    }
    
    while(isNaN(money) || money == ' ' || money == null);
};

start();



let appData = {
    income: {},
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    mission: 100000,
    period: 11,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    asking: function(){
        let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую','Tax, Gas');
            appData.addExpenses = addExpenses.toLocaleLowerCase().split(',');
            appData.deposit = confirm('Есть ли у вас депозит в банке?');
           
    },

    getExpensesMonth : function(){
        for (let i=0; i<2; i++){
            let monthExpenseName;
            let monthExpenseSum;

            if(i === 0){
                monthExpenseName = prompt('Какие обязательные ежемесячные расходы у вас есть?', 'Internet');
            }else if(i===1){
                monthExpenseName = prompt('Какие обязательные ежемесячные расходы у вас есть?', 'Phone');
            }
            do{
                monthExpenseSum = +prompt('Во сколько это обойдется?', 100);
            }
            while(isNaN(monthExpenseSum) || monthExpenseSum == ' ' || monthExpenseSum == null);

            appData.expenses[monthExpenseName] = monthExpenseSum;
            
        }
        for (let prop in appData.expenses){
            appData.expensesMonth += appData.expenses[prop];
        }
    },

    getBudget : function(){
        appData.budgetMonth = appData.budget - appData.expensesMonth;
        appData.budgetDay = Math.floor(appData.budgetMonth /30);
    },

    getTargetMonth : function(){
        if(appData.budgetMonth <= 0) {
            return ('Цель не будет достигнута');
        } else {
            return ('Цель будет достигнута через: ') + Math.ceil(appData.mission / appData.budgetMonth) + (' мес.');
        }        
    },

    getStatusIncome : function(){
        if(appData.budgetDay > 800) {
            return('Высокий уровень дохода');
        } else if(appData.budgetDay > 300 && appData.budgetDay <= 800) {
            return('Средний уровень дохода');
        } else if(appData.budgetDay > 0 && appData.budgetDay <= 300) {
            return('Низкий уровень дохода');
        }else if(appData.budgetDay == 0) {
            return('У вас нет дохода');
        } else if(appData.budgetDay < 0) {
            return('Что то пошло не так');
        }
    }
};

appData.budget = +money;

appData.asking();
appData.getExpensesMonth();
appData.getTargetMonth();
appData.getBudget();
appData.getStatusIncome();


console.log('Все расходы за месяц: ', appData.expensesMonth);
console.log(appData.getTargetMonth());
console.log('Накопления за месяц ', appData.budgetMonth);
console.log(appData.getStatusIncome());
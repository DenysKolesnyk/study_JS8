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
    percentDeposit : 0,
    moneyDeposit : 0,
    mission: 100000,
    period: 11,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    asking: function(){
        if(confirm('Есть ли у вас дополнительный заработок,')){
            let itemIncome;
            let cashIncome;
            
            do{
                itemIncome = prompt('Какой у вас дополнительный заработок', 'репетитор');
            }
            while(itemIncome == '' || itemIncome == null || isNaN(itemIncome)== false);

            do{
                cashIncome = prompt('Какую сумму вы на этом зарабатываете?', 5000);
            }
            while(isNaN(cashIncome) || cashIncome === ' ' || cashIncome === null);
            
            appData.income[itemIncome] = +cashIncome;


        let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую','tax,gas');
            appData.addExpenses = addExpenses.toLocaleLowerCase().split(',');
            appData.deposit = confirm('Есть ли у вас депозит в банке?');
        } 
    },

    getExpensesMonth : function(){
        for (let i=0; i<2; i++){
            let monthExpenseName;
            let monthExpenseSum;

            if(i === 0){
               
               do{
                   monthExpenseName = prompt('Какие обязательные ежемесячные расходы у вас есть?', 'Internet');
               }
               while(monthExpenseName == '' || monthExpenseName == null || isNaN(monthExpenseName)== false);

            }else if(i===1){
                do{
                    monthExpenseName = prompt('Какие обязательные ежемесячные расходы у вас есть?', 'Phone');
                }
                while(monthExpenseName == '' || monthExpenseName == null || isNaN(monthExpenseName)== false);
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
    },

    getInfoDeposit: function(){
        if(appData.deposit){

            do{
                appData.percentDeposit = prompt('Какой годовой процент?', 10);
            }
            while(isNaN(appData.percentDeposit) || appData.percentDeposit == ' ' || appData.percentDeposit == null);
            do{
                appData.moneyDeposit = prompt('Какая сумма вклада?', 7000);
            }
            while(isNaN(appData.moneyDeposit) || appData.moneyDeposit == ' ' || appData.moneyDeposit == null);
        }
    },

    calcSavedMoney: function(){
        return appData.budgetMonth * appData.period;
    }
};

appData.budget = +money;

appData.asking();
appData.getExpensesMonth();
appData.getTargetMonth();
appData.getBudget();
appData.getInfoDeposit();
appData.getStatusIncome();
appData.calcSavedMoney();




console.log('Все расходы за месяц: ', appData.expensesMonth);
console.log(appData.getTargetMonth());
console.log('Накопления за месяц ', appData.budgetMonth);
console.log(appData.getStatusIncome());


let incomeName;

for (let prop in appData.income){
    incomeName= prop;
};


let arr = appData.addExpenses.concat(incomeName);

arr.forEach(function(element, i, array){
    array[i] = element.toUpperCase().charAt(0) + element.slice(1);
    
});

console.log(arr.join(', '));
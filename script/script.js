'use strict';
// Получить кнопку "Рассчитать" через id
let calcButton = document.querySelector('#start');

// Получить кнопки “+” (плюс) через Tag, каждую в своей переменной. 
let plusIncome = document.getElementsByTagName('button')[0];
let plusExpenses = document.getElementsByTagName('button')[1];

// получить чекбокс по id через querySelector

let checkDeposit = document.getElementById('deposit-check');

// Получить поля для ввода возможных доходов (additional_income-item) при помощи querySelectorAll

let incomeInput = document.querySelectorAll('.additional_income-item');

let budgetDayBlocks = document.getElementsByClassName('budget_day-value')[0];
let budgetMonthBlocks = document.getElementsByClassName('budget_month-value')[0];
let expensesMonthBlocks = document.getElementsByClassName('expenses_month-value')[0];
let accumulatedMonthBlocks = document.getElementsByClassName('accumulated_month-value')[0];
let additionalIncomelocks = document.getElementsByClassName('additional_income-value')[0];
let additionalExpensesBlocks = document.getElementsByClassName('additional_expenses-value')[0];
let incomePeriodBlocks = document.getElementsByClassName('income_period-value')[0];
let targetMonthBlocks = document.getElementsByClassName('target_month-value')[0];
let salaryAmount = document.querySelector('.salary-amount'); 
let incomeTitle = document.querySelector('.income-title ');
let expensesTitle = document.querySelector('.expenses-title');
let expensesItems = document.querySelectorAll('.expenses-items');
let additionalExpensesItem = document.querySelector('.additional_expenses-item');
let periodSelect = document.querySelector('.period-select');
let targetAmount = document.querySelector('.target-amount');
let incomeItems = document.querySelectorAll('.income-items');
let periodAmount = document.querySelector('.period-amount');
let allInputText = document.querySelectorAll('.data input[type=text');


let appData = {
    budget: 0,
    income: {},
    incomeMonth: 0,
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    percentDeposit : 0,
    moneyDeposit : 0,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    start: function(){
    
    if(salaryAmount.value ==''){
        calcButton.removeAttribute('disabled');
        return;
    }

    appData.budget = +salaryAmount.value;
    
    appData.getExpenses();
    appData.getIncome();
    appData.getExpensesMonth();
    
    appData.getAddExpenses();
    appData.getAddIncome();
    appData.getBudget();
    appData.showResult();
    appData.blockInput();
    },

    blockInput: function(){
        allInputText.forEach(function(i){
            i.disabled = true;
        });
        plusIncome.style.display = 'none';
        plusExpenses.style.display = 'none';
        start.style.display = 'none';
        cancel.style.display = 'block';
    },

    showResult: function(){
        budgetMonthBlocks.value = appData.budgetMonth;
        budgetDayBlocks.value = appData.budgetDay;
        expensesMonthBlocks.value = appData.expensesMonth;
        additionalExpensesBlocks.value = appData.addExpenses.join(', ');
        additionalIncomelocks.value = appData.addIncome.join(', ');
        targetMonthBlocks.value = appData.getTargetMonth();
        incomePeriodBlocks.value = appData.calcSavedMoney();
        periodSelect.addEventListener('change', function(){
            periodAmount.innerHTML = periodSelect.value;
            incomePeriodBlocks.value = appData.calcSavedMoney();
        })
    },

    addExpensesBlock: function(){
        let cloneExpensesItem = expensesItems[0].cloneNode(true);
        expensesItems[0].parentNode.insertBefore(cloneExpensesItem, plusExpenses);
        expensesItems = document.querySelectorAll('.expenses-items');
    
        if(expensesItems.length === 3){
            plusExpenses.style.display = 'none';
        }
    },

    getExpenses: function(){
        expensesItems.forEach(function(item){
            let itemExpenses = item.querySelector('.expenses-title').value;
            let cashExpenses = item.querySelector('.expenses-amount').value;

            if(itemExpenses !=='' && cashExpenses !== ''){
                appData.expenses[itemExpenses] = cashExpenses;
            }
        });
    },

    addIncomeBlock: function(){
        let cloneIncomeItem = incomeItems[0].cloneNode(true);
        incomeItems[0].parentNode.insertBefore(cloneIncomeItem, plusIncome);
        incomeItems = document.querySelectorAll('.income-items');
    
        if(incomeItems.length === 3){
            plusIncome.style.display = 'none';
        }
    },

    getIncome: function(){
        incomeItems.forEach(function(item){

            let itemIncome = item.querySelector('.income-title').value;
            let cashIncome = item.querySelector('.income-amount').value;

            if(itemIncome !=='' && cashIncome !== ''){
                appData.income[itemIncome] = cashIncome;
            }

        })

    for(let key in appData.income){
    appData.incomeMonth += +appData.income[key];
}

    },

    getAddExpenses: function(){
        let addExpenses = additionalExpensesItem.value.split(',');
        addExpenses.forEach(function(item){
            item = item.trim();
            if(item !== ''){
                appData.addExpenses.push(item);
            }
        })
    },

    getAddIncome: function(){
        incomeInput.forEach(function(item){
            let itemValue = item.value.trim();
            if(itemValue !== ''){
                appData.addIncome.push(itemValue);
            }
        })
    },

   
    getExpensesMonth : function(){
        for (let prop in appData.expenses){
            appData.expensesMonth += +appData.expenses[prop];
        }
    },

    getBudget : function(){
        appData.budgetMonth = appData.budget +appData.incomeMonth - appData.expensesMonth;
        appData.budgetDay = Math.floor(appData.budgetMonth /30);
    },

    getTargetMonth : function(){
        if(appData.budgetMonth <= 0) {
            return ('Цель не будет достигнута');
        } else {
            return Math.ceil(targetAmount.value / appData.budgetMonth);
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
        appData.deposit = confirm('Есть ли у вас депозит в банке?');
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
        return appData.budgetMonth * periodSelect.value;
    }
};

start.addEventListener('click', appData.start);

plusExpenses.addEventListener('click', appData.addExpensesBlock);
plusIncome.addEventListener('click', appData.addIncomeBlock);

// console.log('Все расходы за месяц: ', appData.expensesMonth);
// console.log('Накопления за месяц ', appData.budgetMonth);

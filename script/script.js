'use strict';

const calcButton = document.querySelector('#start'),
    resetButton = document.querySelector('#cancel'),


    plusIncome = document.getElementsByTagName('button')[0],
    plusExpenses = document.getElementsByTagName('button')[1],

    checkDeposit = document.getElementById('deposit-check'),

    incomeInput = document.querySelectorAll('.additional_income-item'),

    budgetDayBlocks = document.getElementsByClassName('budget_day-value')[0],
    budgetMonthBlocks = document.getElementsByClassName('budget_month-value')[0],
    expensesMonthBlocks = document.getElementsByClassName('expenses_month-value')[0],
    accumulatedMonthBlocks = document.getElementsByClassName('accumulated_month-value')[0],
    additionalIncomelocks = document.getElementsByClassName('additional_income-value')[0],
    additionalExpensesBlocks = document.getElementsByClassName('additional_expenses-value')[0],
    incomePeriodBlocks = document.getElementsByClassName('income_period-value')[0],
    targetMonthBlocks = document.getElementsByClassName('target_month-value')[0],
    salaryAmount = document.querySelector('.salary-amount'),
    incomeTitle = document.querySelector('.income-title '),
    expensesTitle = document.querySelector('.expenses-title'),
    expensesItems = document.querySelectorAll('.expenses-items'),
    additionalExpensesItem = document.querySelector('.additional_expenses-item'),
    periodSelect = document.querySelector('.period-select'),
    targetAmount = document.querySelector('.target-amount'),
    incomeItems = document.querySelectorAll('.income-items'),
    periodAmount = document.querySelector('.period-amount'),
    allInputText = document.querySelectorAll('.data input[type=text'),

    allInput = document.querySelectorAll('input[type=text'),

    depositBank = document.querySelector('.deposit-bank'),
    depositAmount = document.querySelector('.deposit-amount'),
    depositPercent = document.querySelector('.deposit-percent');





const appData = {
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

    this.getExpenses();
    this.getIncome();
    this.getExpensesMonth();
    this.getInfoDeposit();
    this.getAddExpenses();
    this.getAddIncome();
    this.getBudget();
    this.showResult();
    this.blockInput();
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

    unlockInput: function(){
        allInputText.forEach(function(i){
            i.disabled = false;
            i.value = '';
        }, 
        allInput.forEach(function(item){
            item.value = '';
        }));

        plusIncome.style.display = 'block';
        plusExpenses.style.display = 'block';
        start.style.display = 'block';
        cancel.style.display = 'none';
    },
    
    showResult: function(){
        budgetMonthBlocks.value = this.budgetMonth;
        budgetDayBlocks.value = this.budgetDay;
        expensesMonthBlocks.value = this.expensesMonth;
        additionalExpensesBlocks.value = this.addExpenses.join(', ');
        additionalIncomelocks.value = this.addIncome.join(', ');
        targetMonthBlocks.value = this.getTargetMonth();
        incomePeriodBlocks.value = this.calcSavedMoney();
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

        for(let key in this.income){
        this.incomeMonth += +this.income[key];
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
        for (let prop in this.expenses){
            this.expensesMonth += +this.expenses[prop];
        }
    },

    getBudget : function(){
        this.budgetMonth = this.budget +this.incomeMonth - this.expensesMonth +(this.moneyDeposit * this.percentDeposit)/12;
        this.budgetDay = Math.floor(this.budgetMonth /30);
    },

    getTargetMonth : function(){
        if(this.budgetMonth <= 0) {
            return ('Цель не будет достигнута');
        } else {
            return Math.ceil(targetAmount.value / this.budgetMonth);
        }        
    },

    getStatusIncome : function(){
        if(this.budgetDay > 800) {
            return('Высокий уровень дохода');
        } else if(this.budgetDay > 300 && this.budgetDay <= 800) {
            return('Средний уровень дохода');
        } else if(this.budgetDay > 0 && this.budgetDay <= 300) {
            return('Низкий уровень дохода');
        }else if(this.budgetDay == 0) {
            return('У вас нет дохода');
        } else if(this.budgetDay < 0) {
            return('Что то пошло не так');
        }
    },

    getInfoDeposit: function(){
        
        if(this.deposit){

            do{
                this.percentDeposit = depositPercent.value;
            }
            while(isNaN(this.percentDeposit) || this.percentDeposit == ' ' || this.percentDeposit == null);
            do{
                this.moneyDeposit = depositAmount.value;
            }
            while(isNaN(this.moneyDeposit) || this.moneyDeposit == ' ' || this.moneyDeposit == null);
        }
    },

    calcSavedMoney: function(){
        return this.budgetMonth * periodSelect.value;
    }
};


checkDeposit.addEventListener('change', function(){
    if(checkDeposit.checked){
        depositBank.style.display = 'inline-block';
        depositAmount.style.display = 'inline-block';
        appData.deposit = 'true';
        depositBank.addEventListener('change', function(){
            let selectIndex = this.options[this.selectedIndex].value;
            if(selectIndex === 'other'){
                depositPercent.style.display = 'inline-block'; // заблокирован
                depositPercent.value = '';
            }else{
                depositPercent.style.display = 'none';
                depositPercent.value = selectIndex;
            }
        });
    } else{
        depositBank.style.display = 'none';
        depositAmount.style.display = 'none';
        depositAmount.value = '';
        appData.deposit = 'false';

    }
});



let bindStart = appData.start.bind(appData);


start.addEventListener('click', bindStart);

plusExpenses.addEventListener('click', appData.addExpensesBlock);
plusIncome.addEventListener('click', appData.addIncomeBlock);
periodSelect.addEventListener('change', function(){
    periodAmount.innerHTML = periodSelect.value;
});

resetButton.addEventListener('click', appData.unlockInput);

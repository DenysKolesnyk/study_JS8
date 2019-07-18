'use strict';

let calcButton = document.querySelector('#start'),
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





const AppData = function(){
    this.budget = 0;
    this.income =  {};
    this.incomeMonth =  0;
    this.addIncome =  [];
    this.expenses =  {};
    this.addExpenses =  [];
    this.deposit =  false;
    this.percentDeposit = 0;
    this.moneyDeposit = 0;
    this.budgetDay =  0;
    this.budgetMonth =  0;
    this.expensesMonth =  0;

};
// ------------------------------------------------
    AppData.prototype.start = function(){
    
    if(salaryAmount.value ==''){
        calcButton.removeAttribute('disabled');
       return;
    }

    this.budget = +salaryAmount.value;

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

    AppData.prototype.blockInput = function(){
        allInputText.forEach(function(i){
            i.disabled = true;
        });
        plusIncome.style.display = 'none';
        plusExpenses.style.display = 'none';
        start.style.display = 'none';
        cancel.style.display = 'block';
    },

    AppData.prototype.unlockInput = function(){
        this.budget = 0;
        this.income =  {};
        this.incomeMonth =  0;
        this.addIncome =  [];
        this.expenses =  {};
        this.addExpenses =  [];
        this.deposit =  false;
        this.percentDeposit = 0;
        this.moneyDeposit = 0;
        this.budgetDay =  0;
        this.budgetMonth =  0;
        this.expensesMonth =  0;
        periodSelect.value = '0';
        periodAmount.innerHTML = periodSelect.value;
        
        if(checkDeposit.checked){
            checkDeposit.checked = false;
            depositPercent.style.display = 'none';
            depositBank.style.display = 'none';
            depositAmount.style.display = 'none';
            depositAmount.value = '';
        }

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
    
    AppData.prototype.showResult = function(){
        budgetMonthBlocks.value = Math.floor(this.budgetMonth);
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

    AppData.prototype.addExpensesBlock = function(){
        let cloneExpensesItem = expensesItems[0].cloneNode(true);
        expensesItems[0].parentNode.insertBefore(cloneExpensesItem, plusExpenses);
        expensesItems = document.querySelectorAll('.expenses-items');
    
        if(expensesItems.length === 3){
            plusExpenses.style.display = 'none';
        }
    },

    AppData.prototype.getExpenses = function(){
        expensesItems.forEach(function(item){
            let itemExpenses = item.querySelector('.expenses-title').value;
            let cashExpenses = item.querySelector('.expenses-amount').value;

            if(itemExpenses !=='' && cashExpenses !== ''){
                appData.expenses[itemExpenses] = cashExpenses;
            }
        });
    },

    AppData.prototype.addIncomeBlock = function(){
        let cloneIncomeItem = incomeItems[0].cloneNode(true);
        incomeItems[0].parentNode.insertBefore(cloneIncomeItem, plusIncome);
        incomeItems = document.querySelectorAll('.income-items');
    
        if(incomeItems.length === 3){
            plusIncome.style.display = 'none';
        }
    },

    AppData.prototype.getIncome = function(){
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

    AppData.prototype.getAddExpenses = function(){
        let addExpenses = additionalExpensesItem.value.split(',');
        addExpenses.forEach(function(item){
            item = item.trim();
            if(item !== ''){
                appData.addExpenses.push(item);
            }
        })
    },

    AppData.prototype.getAddIncome = function(){
        incomeInput.forEach(function(item){
            let itemValue = item.value.trim();
            if(itemValue !== ''){
                appData.addIncome.push(itemValue);
            }
        })
    },

   
    AppData.prototype.getExpensesMonth = function(){
        for (let prop in this.expenses){
            this.expensesMonth += +this.expenses[prop];
        }
    },

    AppData.prototype.getBudget = function(){
        this.budgetMonth = this.budget +this.incomeMonth - this.expensesMonth +(this.moneyDeposit * this.percentDeposit)/12;
        this.budgetDay = Math.floor(this.budgetMonth /30);
    },

    AppData.prototype.getTargetMonth = function(){
        if(this.budgetMonth <= 0) {
            return ('Цель не будет достигнута');
        } else {
            return Math.ceil(targetAmount.value / this.budgetMonth);
        }        
    },

    AppData.prototype.getInfoDeposit = function(){
        
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

    AppData.prototype.calcSavedMoney = function(){
        return this.budgetMonth * periodSelect.value;
    }


let appData = new AppData();

checkDeposit.addEventListener('change', function(){
    if(checkDeposit.checked){
        depositBank.style.display = 'inline-block';
        depositAmount.style.display = 'inline-block';
        appData.deposit = 'true';
        depositBank.addEventListener('change', function(){
            let selectIndex = this.options[this.selectedIndex].value;
            if(selectIndex === 'other'){
                depositPercent.style.display = 'inline-block';
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

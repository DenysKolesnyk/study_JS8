'use strict';
// Получить кнопку "Рассчитать" через id
let calcButton = document.querySelector('#start');

console.log(calcButton);


// Получить кнопки “+” (плюс) через Tag, каждую в своей переменной. 
let plusIncome = document.getElementsByTagName('button')[0];
let plusExpenses = document.getElementsByTagName('button')[1];

console.log(plusIncome);
console.log(plusExpenses);


// получить чекбокс по id через querySelector

let checkDeposit = document.getElementById('deposit-check');

console.log(checkDeposit);


// Получить поля для ввода возможных доходов (additional_income-item) при помощи querySelectorAll

let incomeInput = document.querySelectorAll('.additional_income-item');
console.log(incomeInput);

// Получить все блоки в правой части программы через классы (которые имеют класс название-value, начиная с class="budget_day-value" и заканчивая class="target_month-value">)

let budgetDayBlocks = document.getElementsByClassName('budget_day-value')[0];
let budgetMonthBlocks = document.getElementsByClassName('budget_month-value')[0];
let expensesMonthBlocks = document.getElementsByClassName('expenses_month-value')[0];
let accumulatedMonthBlocks = document.getElementsByClassName('accumulated_month-value')[0];
let additionalIncomelocks = document.getElementsByClassName('additional_income-value')[0];
let additionalExpensesBlocks = document.getElementsByClassName('additional_expenses-value')[0];
let incomePeriodBlocks = document.getElementsByClassName('income_period-value')[0];
let targetMonthBlocks = document.getElementsByClassName('target_month-value')[0];


console.log('budgetDayBlocks', budgetDayBlocks);

// Получить оставшиеся поля через querySelector каждый в отдельную переменную (Инпуты с левой стороны не забудьте про range)

let salaryAmount = document.querySelector('.salary-amount'); 
let incomeTitle = document.querySelector('.income-title ');
let incomeAmount = document.querySelector('.income-amount');
let expensesTitle = document.querySelector('.expenses-title');
let expensesAmount = document.querySelector('.expenses-amount');
let additionalExpensesItem = document.querySelector('.additional_expenses-item');
let targetAmount = document.querySelector('.additional_expenses-item');
let periodSelect = document.querySelector('.period-select');

console.log(salaryAmount);
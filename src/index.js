'use strict';

import popupWindows from'./modules/popup';
import sendForm from'./modules/sendform';
import validation from'./modules/validation';
import more from'./modules/more';
import accordion from'./modules/accordion';
import constructor from'./modules/constructor';
import next from'./modules/next';

window.addEventListener('DOMContentLoaded', function(){

// Модальное окно
popupWindows();

// Отправка формы
sendForm();

// Валидация телефона

validation();

// Кнопка Больше

more();

// Аккардион

accordion ();

//Конструктор

constructor();

//Кнопка следующий шаг

next();

});

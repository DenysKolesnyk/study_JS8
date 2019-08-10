'use strict';

import popupWindows from'./modules/popup';
import sendForm from'./modules/sendform';
import validation from'./modules/validation';
import more from'./modules/more';


window.addEventListener('DOMContentLoaded', function(){

// Модальное окно
popupWindows();

// Отправка формы
sendForm();

// Валидация телефона

validation();

// Кнопка Больше

more();

});

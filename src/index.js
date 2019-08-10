'use strict';

import popupWindows from'./modules/popup';
import sendForm from'./modules/sendform';


window.addEventListener('DOMContentLoaded', function(){

// Модальное окно
popupWindows();

// Отправка формы
sendForm();

});

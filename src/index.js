'use strict';


   import countTimer from'./modules/countimer';
   import toggleMenu from'./modules/togglemenu';
   import togglePopUP from'./modules/toglepopup';
   import tabs from'./modules/tabs';
   import slider from'./modules/slider';
   import flipImg from'./modules/flipimg';
   import validiation from'./modules/validiation';
   import calc from'./modules/calc';
   import sendForm from'./modules/sendform';


   //Таймер
   countTimer('30 august 2020');

    //Меню
    toggleMenu();

    //Модальное окно
    togglePopUP();

    // Табы
    tabs();

    //Слайдер
    slider();

    // Картинка замена 
    flipImg();

    // Валидация
    validiation();

    // калькулятор
    calc();

    // отправка ajax-form
    sendForm();
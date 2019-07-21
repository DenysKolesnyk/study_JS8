window.addEventListener('DOMContentLoaded', function(){
    'use strict';
    
    function countTimer(deadline){
    let timerHours = document.querySelector('#timer-hours'),
        timerMinutes = document.querySelector('#timer-minutes'),
        timerSeconds = document.querySelector('#timer-seconds');

        function getTimeRemaining(){
            let dateStop = new Date(deadline).getTime(),
                dateNow = new Date().getTime(),
                timeRemaining = (dateStop - dateNow) / 1000,
                seconds = Math.floor(timeRemaining % 60),
                minutes = Math.floor((timeRemaining / 60) % 60),
                hours = Math.floor(timeRemaining / 60 /60 );
            return {timeRemaining, hours, minutes, seconds};
        }

        function updateClock(){
            let timer = getTimeRemaining();

            timerHours.textContent = ('0' + timer.hours).slice(-2);
            timerMinutes.textContent = ('0' + timer.minutes).slice(-2);
            timerSeconds.textContent = ('0' + timer.seconds).slice(-2);

            

            if(timer.timeRemaining > 0){
                setInterval(updateClock, 1000);
            }else if(timer.timeRemaining <= 0){
                timerHours.textContent = '00';
                timerMinutes.textContent = '00';
                timerSeconds.textContent = '00';
                timerHours.style.color = 'red';
                timerMinutes.style.color = 'red';
                timerSeconds.style.color = 'red';
                clearInterval(updateClock);
            }
        }

        updateClock();
    }
    
    countTimer('30 july 2019');

    //Меню
    const toggleMenu = () => {
        const btnMenu = document.querySelector('.menu'),
            menu = document.querySelector('menu'),
            closeBtn = document.querySelector('.close-btn'),
            menuItem = menu.querySelectorAll('ul>li');

        const handlerMenu = () => {
            menu.classList.toggle('active-menu');
        };

        btnMenu.addEventListener('click', handlerMenu);
        closeBtn.addEventListener('click', handlerMenu);
        menuItem.forEach((e) => e.addEventListener('click', handlerMenu));
    };
    toggleMenu();

    //Модальное окно

    const togglePopUP = () => {
        const popup = document.querySelector('.popup'),
            popupBtn =document.querySelectorAll('.popup-btn'),
            popUpClose = document.querySelector('.popup-close');
        
        popupBtn.forEach((e) => {
            e.addEventListener('click', () => {
                popup.style.display = 'block';
            });
        });
        
        popUpClose.addEventListener('click', () => {
            popup.style.display = 'none';
        });
    };

    togglePopUP();

});
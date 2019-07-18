window.addEventListener('DOMContentLoaded', function(){
    'use strict';
    let goodDay = document.querySelector('.good-day'),
        today = document.querySelector('.today'),
        currentTime = document.querySelector('.current-time'),
        newYear = document.querySelector('.new-year');

    function getTime(){
        let hours = new Date().getHours(),
            date = new Date();

        if( hours >= 4 && hours <= 12){
            goodDay.textContent = 'Доброе утро';
        }else if(hours >= 12 && hours <= 16){
            goodDay.textContent = 'Добрый день';
        }else if(hours >= 16 && hours <= 21){
            goodDay.textContent = 'Добрый вечер';
        }else {
            goodDay.textContent = 'Доброй ночи';
        }

        let weekDay = new Date().toLocaleString('ru', {weekday: 'long'});
        today.textContent = 'Сегодня: ' + weekDay.charAt(0).toUpperCase() + weekDay.substr(1);

        let time = ('0' + date.getHours()).slice(-2) + ':' + ('0' + date.getMinutes()).slice(-2) + ':' + ('0' + date.getSeconds()).slice(-2);
        currentTime.textContent = 'Текущее время:' + time;
        
        let nextNewYears = Math.floor((new Date('1 january 2020') - new Date()) / (1000 * 3600 * 24));
         let daysName; 

        newYear.textContent = `До Нового года осталось: ${nextNewYears} дней!`;
       if(nextNewYears <= 0){
            newYear.textContent = 0 ;
       }
       
         window.setTimeout(getTime, 1000);
    }
    
    getTime();

});
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
            popupBtn =document.querySelectorAll('.popup-btn');

        popupBtn.forEach((e) => {
            e.addEventListener('click', () => {
                popup.style.display = 'block';
                
            });
        });
        
        popup.addEventListener('click', (event) =>{
            let target = event.target;

            if(target.classList.contains('popup-close')){
                popup.style.display = 'none';
            }else{
                target = target.closest('.popup-content');

                if(!target){
                    popup.style.display = 'none';
                }
            }
        });
    };

    togglePopUP();

    // Табы
    const tabs = () => {
        const tabHeader = document.querySelector('.service-header'),
            tab = tabHeader.querySelectorAll('.service-header-tab'),
            tabContent = document.querySelectorAll('.service-tab');

        const toggleTabContent = (index) => {
            for(let i = 0; i < tabContent.length; i++){
                if(index === i){
                    tab[i].classList.add('active');
                    tabContent[i].classList.remove('d-none');
                }else{
                    tab[i].classList.remove('active');
                    tabContent[i].classList.add('d-none');
                }
            }
        };

        tabHeader.addEventListener('click', (event) => {
            let target = event.target;
            
            
            target = target.closest('.service-header-tab');

            if(target){
                tab.forEach((item, i) => {
                    if(item === target){
                        toggleTabContent(i);
                    } 
                });
            }
        });

    };

    tabs();

    //Слайдер
    const slider = () => {
        const slide = document.querySelectorAll('.portfolio-item'),        
        
        dotUl = document.querySelector('.portfolio-dots');
        
        for(let i=0; i < slide.length; i++){
            let newDot = document.createElement('li');
            dotUl.appendChild(newDot);
            newDot.classList.add('dot');
        };
        
       
        const btn = document.querySelectorAll('.portfolio-btn'),
            dot = document.querySelectorAll('.dot'),
            slider = document.querySelector('.portfolio-content');
        
        let currentSlide = 0,
            interval;

        const prevSlide = (elem, index, strClass) => {
            elem[index].classList.remove(strClass);
        };

        const nextSlide = (elem, index, strClass) => {
            elem[index].classList.add(strClass);
        };

        const autoPlaySlide = () => {

            prevSlide(slide, currentSlide, 'portfolio-item-active');
            prevSlide(dot, currentSlide, 'dot-active');
            currentSlide++;
            if(currentSlide >= slide.length){
                currentSlide = 0;
            }
    
            nextSlide(slide, currentSlide, 'portfolio-item-active');
            nextSlide(dot, currentSlide, 'dot-active');
        };
    
        const startSlide = (time = 3000) => {
           interval = setInterval(autoPlaySlide, time);
        };
    
        const stopSlide = () => {
            clearInterval(interval);
        };
    
        slider.addEventListener('click', (event) =>{
            event.preventDefault();
    
            let target = event.target;
    
            if(!target.matches('.portfolio-btn, .dot')){
                return;
            }
    
            prevSlide(slide, currentSlide, 'portfolio-item-active');
            prevSlide(dot, currentSlide, 'dot-active');
    
            if(target.matches('#arrow-right')){
                currentSlide++;
            }else if(target.matches('#arrow-left')){
                currentSlide--;
            }else if(target.matches('.dot')){
                dot.forEach((elem, index) =>{
                    if(elem === target){
                        currentSlide = index;
                    }
                });
            }
            
            if(currentSlide >= slide.length){
                currentSlide = 0;
            }
            if(currentSlide < 0){
                currentSlide = slide.length - 1;
            }

            nextSlide(slide, currentSlide, 'portfolio-item-active');
            nextSlide(dot, currentSlide, 'dot-active');
        });

        slider.addEventListener('mouseover', (event) =>{
            if(event.target.matches('.portfolio-btn') || event.target.matches('.dot')){
                stopSlide();
            }
        });

        slider.addEventListener('mouseout', (event) =>{
            if(event.target.matches('.portfolio-btn') || event.target.matches('.dot')){
                startSlide();
            }  
        });

        startSlide();  
    };

    slider();

    // Картинка замена 

    const  imgFlip = document.querySelectorAll('.command__photo');
   
    imgFlip.forEach((el) => {
        el.addEventListener('mouseenter', (e) =>{
            
            var target = event.target.src;
            event.target.src = event.target.dataset.img;

            el.addEventListener('mouseleave', (e) =>{
                event.target.src = target;
                        
             });
        });
    }); 
    
    // Валидация

    const validNum = document.querySelectorAll('input[type="number"]');
    
   
    validNum.forEach((el) =>{
        el.addEventListener('input', () => {
           
            event.target.value = event.target.value.replace(/\D/g, '');
            
        });
    });
    
    const inputName = document.querySelectorAll('#form1-name, #form2-name, #form2-message, #form3-name'),
        inputPhone = document.querySelectorAll('input[type="tel"]');


        inputName.forEach((el) =>{
            el.addEventListener('input', () =>{
                event.target.value = event.target.value.match(/[а-яА-ЯёЁ\s]+/g);
            });
        });


        inputPhone.forEach((el) =>{
            el.addEventListener('input', () =>{
                event.target.value = event.target.value.match(/^\+?\d*$/g);
            });
        });


    // калькулятор

    const calc = (price = 100) => {
        const calcBlock = document.querySelector('.calc-block'),
            calcType = document.querySelector('.calc-type'),
            calcSquare = document.querySelector('.calc-square'),
            calcDay = document.querySelector('.calc-day'),
            calcCount = document.querySelector('.calc-count'),
            totalValue = document.getElementById('total');

        const countSum = () => {
            let total = 0,
                typeValue = calcType.options[calcType.selectedIndex].value,
                squareValue = +calcSquare.value,
                countValue = 1,
                dayValue = 1;

            if(calcCount.value > 1){
                countValue += (calcCount.value - 1) / 10;
            }
            
            if(calcDay && calcDay.value < 5){
                dayValue *= 2;
            }else if(calcDay && calcDay.value < 10){
                dayValue *= 1.5;
            }

            if(typeValue && squareValue){
                total = price * typeValue * squareValue * countValue * dayValue;
            }
            
            totalValue.textContent = total;
        };

        calcBlock.addEventListener('change', (event) => {
            const target = event.target;
            // if(target.matches('.calc-type') || target.matches('.calc-square') ||target.matches('.calc-day') || target.matches('.calc-square')){

            // }

            if(target.matches('select') || target.matches('input')){
                countSum();
            }
        });

    };
    calc();

    // отправка ajax-form
    
   
    const sendForm = () => {

        const errorMessage = 'Что то пошло не так ... ',
            loadMessage = 'Load',
            succesMessage = 'Спасибо! Мы скоро с Вами свяжемся';
        
        const form = document.getElementById('form1'),
            formTwo = document.getElementById('form2'),
            formModal = document.getElementById('form3');
            
        const statusMessage = document.createElement('div');
        
        statusMessage.style.cssText = 'font-size: 2rem;';

        form.addEventListener('submit', (event) => {
            event.preventDefault();
            form.appendChild(statusMessage);
            
            statusMessage.textContent = loadMessage;

            const formData = new FormData(form);
            
            let body ={};
            
            for (let val of formData.entries()){
                body[val[0]] = val[1];
            }
           postData(body, () => {
            statusMessage.textContent = succesMessage;
           }, (error) => {
            statusMessage.textContent = errorMessage;
            console.log(error);
           });
           clearInput();
        });


        formTwo.addEventListener('submit', (event) => {
            event.preventDefault();
            form.appendChild(statusMessage);
            
            statusMessage.textContent = loadMessage;

            const formData = new FormData(form);
            
            let body ={};
            
            for (let val of formData.entries()){
                body[val[0]] = val[1];
            }
           postData(body, () => {
            statusMessage.textContent = succesMessage;
           }, (error) => {
            statusMessage.textContent = errorMessage;
            console.log(error);
           });
           clearInput();
           
        });



        formModal.addEventListener('submit', (event) => {
            event.preventDefault();
            form.appendChild(statusMessage);
            
            statusMessage.textContent = loadMessage;

            const formData = new FormData(form);
            
            let body ={};
            
            for (let val of formData.entries()){
                body[val[0]] = val[1];
            }
           postData(body, () => {
            statusMessage.textContent = succesMessage;
           }, (error) => {
            statusMessage.textContent = errorMessage;
            console.log(error);
           });
           clearInput();
        });

        const postData = (body, outputData, errorData) => {
            const request = new XMLHttpRequest();
            
            request.addEventListener('readystatechange', () =>{
                
                if(request.readyState !== 4){
                    return;
                }

                if(request.status == 200){
                    outputData();
                } else {
                    errorData(request.status);
                }
            });

            request.open('POST', './server.php');
            request.setRequestHeader('Content-Type', 'application/json');
            request.send(JSON.stringify(body));
        }

        const clearInput = () => {
            const inputAll = document.querySelectorAll('input');
            
            inputAll.forEach((el) => {
                el.value = '';
            });
        }
    };

    sendForm();
});
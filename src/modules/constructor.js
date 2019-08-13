const constructor = () => {
    let 
        calcResult = document.querySelector('#calc-result');
    
    const 
        onOffSwitch = document.querySelector('#myonoffswitch'),
        onOffSwitchBottom = document.querySelector('#myonoffswitch-two'),
        secondWell = document.querySelectorAll('.second'),
        diametrOne = document.querySelector('.diametr-one'),
        diametrTwo = document.querySelector('.diametr-two'),
        circleOne = document.querySelector('.circle-one'),
        circleTwo = document.querySelector('.circle-two'),
        meters = document.querySelector('#collapseFour').querySelector('input'),
        accordionBlock = document.querySelector('#accordion');

    const calcData = {
            diametrOne: 0,
            diametrTwo: 0,
            circleOne: 0,
            circleTwo: 0,
            meters: 0,
            chamber: 0,
            Bottom: 0,
            total: 0
        };
   

    calcData.diametrOne = diametrOne.options[diametrOne.selectedIndex].value;
    calcData.circleOne = circleOne.options[circleOne.selectedIndex].value;

    const countSum = ()=>{
        
        let total = 0;
        const
            chamberOne = 10000,
            chamberTwo = 15000,
            bottomOne = 1000,
            bottomTwo = 2000;

        if(onOffSwitch.checked){
            
            total = chamberOne;
            
            calcData.chamber = 1;
            
            if(diametrOne.selectedIndex == 0){
                total = total;
            }else if(diametrOne.selectedIndex == 1){
                total = total * 1.2;
            }

            calcData.diametrOne = diametrOne.options[diametrOne.selectedIndex].value;
            calcData.diametrTwo = 0;



            if(circleOne.selectedIndex == 0)
            {    total = total;
            } else if(circleOne.selectedIndex == 1){
                total = total + ((chamberOne* 1.3) - chamberOne);
            } else if(circleOne.selectedIndex == 2){
                total = total + ((chamberOne* 1.5) - chamberOne);
            }
            calcData.circleOne = circleOne.options[circleOne.selectedIndex].value;
            calcData.circleTwo = 0;
        }

        if(!onOffSwitch.checked){
            
            calcData.chamber = 2;
            total = chamberTwo;

            if(diametrOne.selectedIndex == 0 ){
                total = chamberTwo;
            }else if(diametrOne.selectedIndex == 1 ){
                total = total * 1.2;
            }                
            calcData.diametrOne = diametrOne.options[diametrOne.selectedIndex].value;
  
            if(diametrTwo.selectedIndex == 0){
                total = total;
            }else if(diametrTwo.selectedIndex == 1){
                total = total +  ((chamberTwo* 1.2) - chamberTwo);
            }
            
            calcData.diametrTwo = diametrTwo.options[diametrTwo.selectedIndex].value;
  

            if(circleOne.selectedIndex == 0){
                total = total;
            }else if(circleOne.selectedIndex == 1){
                total = total + ((chamberTwo* 1.3) - chamberTwo);
            }
            else if(circleOne.selectedIndex == 2){
                total = total + ((chamberTwo* 1.5) - chamberTwo);
            }
         

            calcData.circleOne = circleOne.options[circleOne.selectedIndex].value;

            if(circleTwo.selectedIndex == 0){
                total = total;
            } else if(circleTwo.selectedIndex == 1){
                total = total + ((chamberTwo* 1.3) - chamberTwo);
            }
            else if(circleTwo.selectedIndex == 2){
                total = total + ((chamberTwo* 1.5) - chamberTwo);
            }
            
            calcData.circleTwo = circleTwo.options[circleTwo.selectedIndex].value;
           
        }

        if(onOffSwitchBottom.checked){
            if(onOffSwitch.checked){
                total = total + bottomOne;
            }else{
                total = total + bottomTwo; 
            }
            calcData.Bottom = 1;
        }else if(!onOffSwitchBottom.checked){
            calcData.Bottom = 0;
        }
        
        calcResult.value = total;

        calcData.total = total;

        calcData.meters = meters.value;
    };

    const switchWell = () =>{
        secondWell.forEach((el) => {
            el.style.display = 'none';
        });
       
        onOffSwitch.addEventListener('change', () =>{
            secondWell.forEach((el) => {    
                if(onOffSwitch.checked){
                    el.style.display = 'none';
                }else{
                    el.style.display = 'inline-block';
                }
            });
        });
    };
    switchWell();


    accordionBlock.addEventListener('change', (event) => {
        const target = event.target;

        if(target.matches('select') || target.matches('input')){
            countSum();
        }
       
    });
     
    return calcData;
};

export default constructor;

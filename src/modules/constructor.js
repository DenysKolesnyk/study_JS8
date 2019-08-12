const constructor = () => {
    const 
        onOffSwitch = document.querySelector('#myonoffswitch'),
        secondWell = document.querySelectorAll('.second');

    
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

    
};

export default constructor;
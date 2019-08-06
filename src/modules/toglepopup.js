const togglePopUP = () => {
    const popup = document.querySelector('.popup'),
        popupBtn =document.querySelectorAll('.popup-btn'),
        popUpContent = document.querySelector('.popup-content');
    


    let count = 0;
    
    let popUpAnimate = () =>{
        count++;
        popUpContent.style.left = count +'%';
        if(count < 38){
            setTimeout(popUpAnimate, 10);
        }else{
            count = 0;
        }
    };



    popupBtn.forEach((e) => {
        e.addEventListener('click', () => {
            popup.style.display = 'block';
            popUpAnimate();
            
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

export default  togglePopUP;
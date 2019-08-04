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
export default  togglePopUP;
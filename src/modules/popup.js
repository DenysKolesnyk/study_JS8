
const popupWindows = () =>{

    const popUp = document.querySelectorAll('.popup'),
        popupConsultation = document.querySelector('.popup-consultation'),
        popupDiscount = document.querySelector('.popup-discount'),
        popupCheck = document.querySelector('.popup-check'),
        popUpCall = document.querySelector('.popup-call'),
        btnPopUp = document.querySelectorAll('.consultation-btn, .check-btn, .discount-btn, .call-btn'),
        userQuest = document.querySelector('input[name = "user_quest"]');

    btnPopUp.forEach((e) => {
        e.addEventListener('click', (event) =>{
            
            if(event.target.classList.contains('consultation-btn') && userQuest.value !=""){
                popupConsultation.style.display = 'block';
            } else  if(event.target.classList.contains('check-btn')){
                popupCheck.style.display = 'block';
            } else  if(event.target.classList.contains('discount-btn')){
                popupDiscount.style.display = 'block';
            }  else  if(event.target.classList.contains('call-btn')){
                event.preventDefault();
                popUpCall.style.display = 'block';
            }   
        });
    });
    
    popUp.forEach((el) => {
        el.addEventListener('click', (e)=>{
            if(e.target.matches('.popup-close, .popup')){
                el.style.display = 'none';
            }
        });
    });
    

};

export default popupWindows;
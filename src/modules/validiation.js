const validiation = () =>{
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
    };
    export default validiation;
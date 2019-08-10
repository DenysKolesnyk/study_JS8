
const validation = () =>{
    
    const inputPhone = document.querySelectorAll('input[name="user_phone"]');

        inputPhone.forEach((el) =>{
            el.addEventListener('input', () =>{
                event.target.value = event.target.value.match(/^\+?\d*$/g);
            });
        });
    };


export default validation;
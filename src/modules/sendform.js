
const sendForm = () => {

    const errorMessage = 'Что то пошло не так ... ',
        loadMessage = 'Отправка информации ...',
        succesMessage = 'Спасибо! Мы скоро с Вами свяжемся';
    
    const form = document.querySelectorAll('form');

    const statusMessage = document.createElement('div');
    
    statusMessage.style.cssText = 'font-size: 2rem;';
      

    form.forEach((el) =>{
        el.addEventListener('submit', (event) => {
            event.preventDefault();
            el.appendChild(statusMessage);
            
            statusMessage.textContent = loadMessage;

            const formData = new FormData(el);
            
            let body ={};
            
            for (let val of formData.entries()){
                body[val[0]] = val[1];
            }
            postData(body)
            .then((response) =>{
                if(response.status !== 200){
                    throw new Error('Status network not 200');
                }
                statusMessage.textContent = succesMessage;
            })
            .catch((error) =>{
                statusMessage.textContent = errorMessage;
                console.log(error);
            });
           clearInput();
        });
    });

    const postData = (body) => {
       return fetch('./server.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
       });
    
       
    };


    const clearInput = () => {
        const inputAll = document.querySelectorAll('input');
        
        inputAll.forEach((el) => {
            el.value = '';
        });
    }
};



export default sendForm;
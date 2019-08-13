const accordion = () =>{
    const accordion = document.querySelectorAll('#accordion, #accordion-two');

    const toggleTab = (index, panelHeading, panelCollapse) => {
        for(let i = 0; i < panelHeading.length; i++){
            if(index === i){
                panelCollapse[i].style.display = 'block';
            }else{
                 panelCollapse[i].style.display = 'none';
            }
        }
    };

    accordion.forEach((el) => {
        el.addEventListener('click', (event) =>{
                           
            let target = event.target;

            const panelHeading = el.querySelectorAll('.panel-heading'),
                panelCollapse = el.querySelectorAll('.panel-collapse');

            target = target.closest('.panel-heading');
            
            if(target){
                panelHeading.forEach((item, i) =>{
                    if(item === target){
                        event.preventDefault();
                        toggleTab(i, panelHeading, panelCollapse );
                    }
                });
            }
           
        });
    });


};

export default accordion;
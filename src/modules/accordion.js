const accordion = () =>{
    const 
    accordion = document.querySelectorAll('#accordion, #accordion-two');

    const openTab = (index, panelHeading, panelCollapse) => {
        for(let i = 0; i < panelHeading.length; i++){
            if(index === i){
                panelCollapse[i].style.display = 'block';
            }
        }
    };

        
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
                    if(item === target && el.id == 'accordion'){
                        event.preventDefault();
                        openTab(i, panelHeading, panelCollapse );
                    }else if(item === target && el.id == 'accordion-two'){
                        event.preventDefault();
                        toggleTab(i, panelHeading, panelCollapse );
                    }
                });
            }
           
        });
    });

};

export default accordion;
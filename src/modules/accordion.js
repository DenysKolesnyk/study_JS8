const accordion = () =>{
    const 
        accordionTwo = document.querySelector('#accordion-two'),
        panelHeading = accordionTwo.querySelectorAll('.panel-heading'),
        panelCollapse = accordionTwo.querySelectorAll('.panel-collapse');

        
        const toggleTab = (index) => {
            for(let i = 0; i < panelHeading.length; i++){
                if(index === i){
                    panelCollapse[i].style.display = 'block';
                }else{
                     panelCollapse[i].style.display = 'none';
                }
            }
        };
        
        accordionTwo.addEventListener('click', (event) =>{
                let target = event.target;
                event.preventDefault();

                target = target.closest('.panel-heading');

                if(target){
                    panelHeading.forEach((item, i) =>{
                        if(item === target){
                            toggleTab(i);
                        }
                    });
                }
        });

};

export default accordion;
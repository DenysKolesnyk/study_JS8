const next = () =>{

    const 
        constructBtn  = document.querySelectorAll('.construct-link'),
        constructorAccordion = document.querySelector('#accordion'),
        panelCollapse  = constructorAccordion.querySelectorAll('.panel-collapse');
        
        console.log(constructBtn);

    constructBtn.forEach((el) =>{
        el.addEventListener('click', (e) =>{
            
                console.log(el);

                let target = e.target;
            
                target = target.closest('.panel-collapse');
    
                target.style.display = 'none';
                
                panelCollapse.forEach((item, i) =>{
                    event.preventDefault();
                    if(item == target){
                        panelCollapse[i+1].style.display = 'block';
                    }
                });
        });

    });
 
};


export default next;
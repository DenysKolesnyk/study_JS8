const flipImg = () =>{
    const  imgFlip = document.querySelectorAll('.command__photo');

    imgFlip.forEach((el) => {
        el.addEventListener('mouseenter', (e) =>{
            
            var target = event.target.src;
            event.target.src = event.target.dataset.img;

            el.addEventListener('mouseleave', (e) =>{
                event.target.src = target;
                        
            });
        });
    }); 
};
export default flipImg;
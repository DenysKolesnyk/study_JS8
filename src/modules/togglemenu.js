const toggleMenu = () => {
    const menu = document.querySelector('menu'),
        menuItem = menu.querySelectorAll('ul>li');

    const handlerMenu = () => {
        menu.classList.toggle('active-menu');
    };

    document.addEventListener('click', (e) =>{
        if(e.target.matches('.menu *, menu, .close-btn')){
            handlerMenu();
        } else{
            menu.classList.remove('active-menu');
        }   
    });

    
    menuItem.forEach((e) => e.addEventListener('click', handlerMenu));
};

    export default toggleMenu;
    const toggleMenu = () => {
        const menu = document.querySelector('menu');
        document.addEventListener('click', (e) => {
            
            if (e.target.closest('.menu') && !menu.classList.contains('active-menu')) {
                menu.classList.add('active-menu');
            } else if (!(e.target.closest('.active-menu') && !(e.target.closest('.close-btn') 
                      || e.target.closest('.active-menu a'))) && menu.classList.contains('active-menu')) {
                menu.classList.remove('active-menu');
            }
        });
    };

export default toggleMenu;
const more = () => {
    const moreBtn = document.querySelector('.add-sentence-btn'),
        hidden = document.querySelectorAll('.hidden, .visible-sm-block');

    moreBtn.addEventListener('click', () =>{
        moreBtn.style.display = 'none';
        hidden.forEach((e) =>{
            e.style.cssText = 'display: block!important ;';
        });
    });
};

more();


export default more;
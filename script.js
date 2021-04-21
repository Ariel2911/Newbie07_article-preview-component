const footer = document.getElementById('footer');

footer.addEventListener('click', e =>{
    
    if(e.target.classList.contains('footer__buttom')){
        footer.lastElementChild.classList.toggle('share--show');
        footer.firstElementChild.childNodes[5].classList.toggle('footer__buttom-container--active');
        footer.firstElementChild.childNodes[5].childNodes[1].classList.toggle('footer__buttom--active'); 
    };
})

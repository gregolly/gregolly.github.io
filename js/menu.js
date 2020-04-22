function menuMobile(){
    const button = document.querySelector('.svg')
    const menu = document.querySelector('.menu');
    const close = document.querySelector('.close');

    button.addEventListener('click', () =>{
        menu.classList.add('ativo');
    });

    close.addEventListener('click', () =>{
        menu.classList.remove('ativo');
    });
}
menuMobile();


function menuHide(){
    const menu = document.querySelector('.menu');
    const innerLink = document.querySelectorAll('[data-scroll]')
    
    innerLink.forEach((el) =>{
        el.addEventListener('click', () =>{
            menu.classList.remove('ativo')
        });
    }); 


}
menuHide()
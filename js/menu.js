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
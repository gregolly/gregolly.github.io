function animar(){
    const hamb = document.querySelector('.menu-hamburguer');
    const menu = document.querySelector('.menu');

    hamb.addEventListener('click', () =>{
        menu.classList.add('lightSpeedIn')
    })
}
animar()
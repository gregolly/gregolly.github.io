function backToTop(){
    const back = document.querySelector('.top');

    window.addEventListener('scroll', (el)=>{
        const backto = window.pageYOffset;


        if(backto > 3000 ){
            back.classList.add('active');
        } else{
            back.classList.remove('active');
        }
    });
}
backToTop();
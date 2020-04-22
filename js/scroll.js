function scrollSmooth(){

    function debounce(func, wait, immediate) {
        var timeout;
        return function() {
            var context = this, args = arguments;
            var later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    };
    debounce()

    const target = document.querySelectorAll('[data-anime]')
    const animateClass = 'animate';

    function animeScroll(){
        const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4)
        target.forEach((el) =>{
            if((windowTop) > el.offsetTop){
                el.classList.add(animateClass)
            }
            console.log(el.offsetTop)
        });
    }

    if(target.length){
        window.addEventListener('scroll', debounce(() =>{
            animeScroll();
        }, 200));
    }
}
scrollSmooth()



const hamburgerButton = document.querySelector('.navbar-toggler');
const nav = document.querySelector('nav');
    
hamburgerButton.addEventListener('click',changeTogglerStyle);
    
export function changeTogglerStyle(){
    
        if(nav.classList.contains('open')){
            nav.classList.remove('open')
    
            
        } else {
            nav.classList.add('open')
        }
    
} 
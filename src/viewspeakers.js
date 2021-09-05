
export function viewAllSpeakers(){
    const viewAllSpeakersBtn = document.querySelector('#viewAllSpeakers');
    const hiddenSpeakers = document.querySelectorAll('.hiddenSpeakers');

viewAllSpeakersBtn.addEventListener('click', function(){

    for (let i = 0; i < hiddenSpeakers.length; i++){
        hiddenSpeakers[i].classList.remove('d-none');
    }

    viewAllSpeakersBtn.classList.add('d-none');
    
})
}

viewAllSpeakers();
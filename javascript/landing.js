var isClicked = false;

function hamburgerClick() {
    let hamburger = document.getElementById("hamburger");
    let overlay = document.getElementById("overlay");
    let body = document.getElementById("body");

    overlay.style.animation = 'none'

    overlay.classList.remove('overlay-in')
    overlay.classList.remove('overlay-out')
    
    overlay.offsetHeight;

    if(isClicked) {
        overlay.style.animation = null
        overlay.classList.add('overlay-out')

        hamburger.classList.remove('fa-times')
        hamburger.classList.add('fa-bars')

        setTimeout(() => {
            overlay.style.display = "none"
        }, 1000)
        console.log('overlay out')
        isClicked = false;
    } else {
        overlay.style.animation = null
        overlay.style.display = "block"

        hamburger.classList.remove('fa-bars')
        hamburger.classList.add('fa-times')

        overlay.classList.add('overlay-in')

        isClicked = true;
    }

}
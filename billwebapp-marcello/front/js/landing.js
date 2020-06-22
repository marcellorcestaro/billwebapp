window.onload = function () {
    var hamburguerInput = document.getElementById("hamburger");
    hamburguerInput.addEventListener('click', this.handleHamburger)
}

function handleHamburger(event) {
    let hamburger = document.getElementById("label-burg");
    var isChecked = event.target.checked
    var overlay = document.getElementById("overlay")
    let body = document.getElementById("body");
    let html = document.getElementById("html");

    overlay.style.animation = 'none'

    overlay.classList.remove('overlay-in')
    overlay.classList.remove('overlay-out')
    
    overlay.offsetHeight;

    if(isChecked){
        overlay.style.animation = null
        overlay.style.display = "flex"
        overlay.classList.add('overlay-in')
        body.style.overflow = 'hidden'
        body.style.height = '100%';
        body.style.position = 'fixed';
        html.style.overflow = 'hidden'
        html.style.height = '100%';
        hamburger.innerHTML = "&#10005"
        console.log('overlay in')

    } else {
        overlay.style.animation = null
        overlay.classList.add('overlay-out')
        body.style.height = null
        body.style.overflow = null
        body.style.position = null;
        html.style.overflow = null
        html.style.height = null
        hamburger.innerHTML = "&#9776"

        setTimeout(() => {
            overlay.style.display = "none"
        }, 1000)
        console.log('overlay out')

    }
}
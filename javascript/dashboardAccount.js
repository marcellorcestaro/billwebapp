// const BASE_URL = 'https://billwebapp.herokuapp.com/api/auth/user/3/'
// const RESERVA_URL = 'https://billwebapp.herokuapp.com/api/reserva/3/'
// const DESPESA_FIXA_URL = 'https://billwebapp.herokuapp.com/api/despesa/fixa/3/'
// const DESPESA_VAR_URL = 'https://billwebapp.herokuapp.com/api/despesa/variavel/3/'
// const DESPESA_ADD_URL = 'https://billwebapp.herokuapp.com/api/despesa/adicional/3/'

// COLLAPSE ELEMENTS FUNCTIONS

function getCollapsibles(){
    const collapsibles = document.querySelectorAll(`[collapsible]`)
    collapsibles.forEach(coll => {
        coll.addEventListener('click', function () {
            this.classList.toggle('active')
            let content = this.nextElementSibling
            if (content.style.maxHeight){
                content.style.maxHeight = null
                canCollapse(coll, false)
            }
            else {
                content.style.maxHeight = content.scrollHeight + 'px'
                canCollapse(coll, true)
            }
        })
    })
}

function canCollapse(coll, response) {
    const collapseTrue = coll.querySelector(`[collapse='true']`)
    const collapseFalse = coll.querySelector(`[collapse='false']`)
    if (response) {
        collapseTrue.style.display = 'none'
        collapseFalse.style.display = 'block'
    }
    else {
        collapseTrue.style.display = 'block'
        collapseFalse.style.display = 'none'

    }
}

// CALL FUNCTIONS
getCollapsibles()
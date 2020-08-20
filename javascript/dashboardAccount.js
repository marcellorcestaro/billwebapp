// const BASE_URL = 'https://billwebapp.herokuapp.com/api/auth/user/3/'
// const RESERVA_URL = 'https://billwebapp.herokuapp.com/api/reserva/3/'
// const DESPESA_FIXA_URL = 'https://billwebapp.herokuapp.com/api/despesa/fixa/3/'
// const DESPESA_VAR_URL = 'https://billwebapp.herokuapp.com/api/despesa/variavel/3/'
// const DESPESA_ADD_URL = 'https://billwebapp.herokuapp.com/api/despesa/adicional/3/'


// IDENTIFY PAGE
function getPage() {
    const url = window.location.href
    activePageLink(url)
    choosePageFunctions(url)
}

function activePageLink(url) {
    const menuLinks = document.querySelectorAll(`[menu-link]`)
    menuLinks.forEach(link => {
        if (url.indexOf(link.href) != -1) {
            link.classList.add('active')
        }
    })
}

function choosePageFunctions(url) {
    if (url.indexOf('dashboard') != -1) {
        getCollapsibles()
        getMonthSpends()
        getMonthPlans()
    }
    else {
        console.log('Account functions')
    }
}


// COLLAPSE ELEMENTS FUNCTIONS

function getCollapsibles() {
    const collapsibles = document.querySelectorAll(`[collapsible]`)
    collapsibles.forEach(coll => {
        coll.addEventListener('click', function () {
            this.classList.toggle('active')
            let content = this.nextElementSibling
            if (content.style.maxHeight) {
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

function canCollapse(element, response) {
    const collapseTrue = element.querySelector(`[collapse='true']`)
    const collapseFalse = element.querySelector(`[collapse='false']`)
    if (response) {
        collapseTrue.style.display = 'none'
        collapseFalse.style.display = 'block'
    }
    else {
        collapseTrue.style.display = 'block'
        collapseFalse.style.display = 'none'

    }
}

// SHOW MONTH SPENDS DETAILS
function canShowTableSpends(element, canShow) {
    const tables = element.querySelectorAll(`[spendsTable]`)
    if (canShow) {
        tables.forEach(table => table.style.display = 'block')
    }
    else {
        tables.forEach(table => table.style.display = 'none')

    }
}

function getMonthSpends() {
    const monthSpends = document.querySelector(`[month-spends]`)
    monthSpends.addEventListener('click', function () {
        const divSpends = document.querySelector(`[divSpends]`)
        if (divSpends.style.marginTop != '75px') {
            divSpends.style.marginTop = '75px'
            canShowTableSpends(divSpends, true)
            canCollapse(monthSpends, true)
        }
        else {
            divSpends.style.marginTop = '10px'
            canShowTableSpends(divSpends, false)
            canCollapse(monthSpends, false)
        }
    })
}

// SHOW MONTH PLANS DETAILS
function getMonthPlans() {
    const monthPlans = document.querySelector(`[month-plans]`)
    monthPlans.addEventListener('click', function () {
        const viewPlans = document.querySelector(`[view-plans]`)
        if (viewPlans.style.maxHeight) {
            viewPlans.style.maxHeight = null
            canCollapse(monthPlans, false)
        }
        else {
            viewPlans.style.maxHeight = viewPlans.scrollHeight + 'px'
            canCollapse(monthPlans, true)
        }
    })
}

// CALL FUNCTIONS

getPage()
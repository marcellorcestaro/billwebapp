const BASE_URL = 'https://billwebapp.herokuapp.com/api/auth/user/3/'
const RESERVA_URL = 'https://billwebapp.herokuapp.com/api/reserva/3/'
const DESPESA_FIXA_URL = 'https://billwebapp.herokuapp.com/api/despesa/fixa/3/'
const DESPESA_VAR_URL = 'https://billwebapp.herokuapp.com/api/despesa/variavel/3/'
const DESPESA_ADD_URL = 'https://billwebapp.herokuapp.com/api/despesa/adicional/3/'

window.onload = () => {
    this.getPage()
}

// Get current user info

function getJSON(url, callback) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
        let status = xhr.status;
        if (status === 200) {
            console.log("Connection completed.\n Status: " + status);
        } else {
            console.log("Connection failed.zn Status: " + status);
        }
        callback(status, xhr.response)
    }
    xhr.send();
}

// Current page functions

function getPage() {
    let pagePath = window.location.pathname
    if (pagePath.indexOf('conta.html') >= 0) {
        document.getElementById('acc-link').className += 'active'
        return 'conta'

    } else if (pagePath.indexOf('dashboard.html') >= 0) {
        document.getElementById('dash-link').className += 'active'
        this.getDashInfo()
        this.getUserReserve()
        this.getUserDespesaFixa()
        this.getMonthSpend()
        return 'dashboard'
    }
}

//Account page functions

function compareUserEmail(user) {
    let txtUserEmail = document.getElementById('txt-email-atual')
    txtUserEmail.onchange = () => {
        let emailSpan = document.getElementById('email-span')
        if (txtUserEmail.value != user.email) {
            emailSpan.style.display = 'block'
        } else {
            emailSpan.style.display = 'none'
        }
    }
}

function compareUserPass(user) {
    let txtUserPass = document.getElementById('txt-pass-atual')
    txtUserPass.onchange = () => {
        let passSpan = document.getElementById('pass-span')
        if (txtUserPass.value != user.email) {
            passSpan.style.display = 'block'
        } else {
            passSpan.style.display = 'none'
        }
    }
}

function getUserName(user) {
    let txtUserName = document.getElementById('txt-name')
    txtUserName.placeholder = `${user.first_name}`
}

function expandUserName() {
    let dropIcon = document.getElementById('name-drop')
    let upIcon = document.getElementById('name-up')
    dropIcon.style.display = "none"
    upIcon.style.display = "flex"
    let userNameContent = document.getElementById('user-name-content')
    userNameContent.style.display = 'flex'
    userNameContent.style.flexDirection = 'column'
    userNameContent.style.alignItems = 'center'
    document.getElementById('name-button').style.display = "block"
    this.getUserName()
}

function upUserName() {
    let dropIcon = document.getElementById('name-drop')
    let upIcon = document.getElementById('name-up')
    dropIcon.style.display = "flex"
    upIcon.style.display = "none"
    document.getElementById('user-name-content').style.display = 'none'
    document.getElementById('name-button').style.display = "none"
}

function dropUserEmail() {
    let dropIcon = document.getElementById('email-drop')
    let upIcon = document.getElementById('email-up')
    dropIcon.style.display = "none"
    upIcon.style.display = "flex"
    let userEmailContent = document.getElementById('user-email-content')
    userEmailContent.style.display = 'flex'
    userEmailContent.style.flexDirection = 'column'
    userEmailContent.style.alignItems = 'flex-start'
    document.getElementById('email-button').style.display = "block"
    this.compareUserEmail()
}

function upUserEmail() {
    let dropIcon = document.getElementById('email-drop')
    let upIcon = document.getElementById('email-up')
    dropIcon.style.display = "flex"
    upIcon.style.display = "none"
    document.getElementById('user-email-content').style.display = 'none'
    document.getElementById('email-button').style.display = "none"
}

function dropUserPass() {
    let dropIcon = document.getElementById('pass-drop')
    let upIcon = document.getElementById('pass-up')
    dropIcon.style.display = "none"
    upIcon.style.display = "flex"
    let userpassContent = document.getElementById('user-pass-content')
    userpassContent.style.display = 'flex'
    userpassContent.style.flexDirection = 'column'
    userpassContent.style.alignItems = 'flex-start'
    document.getElementById('pass-button').style.display = "block"
    this.compareUserPass()
}

function upUserPass() {
    let dropIcon = document.getElementById('pass-drop')
    let upIcon = document.getElementById('pass-up')
    dropIcon.style.display = "flex"
    upIcon.style.display = "none"
    document.getElementById('user-pass-content').style.display = 'none'
    document.getElementById('pass-button').style.display = "none"
}

// Dashboard functions

function getDashInfo() {
    let url = `${BASE_URL}`
    let user = {}
    getJSON(url, function(status, data) {
        user = data
        setUserCash(user)
        setUserName(user)
        setSal(user)
    })
}

function getMonthSpend() {
    let fixed = getUserDespesaFixa()
    let add = getUserDespesaAdd()
    let spendVar = getUserDespesaVar()
    let monthlySpend = 0
    for (let x = 0; x < fixed.length; i++) {
        monthlySpend += fixed[x].valor
    }
    for (let y; y < add.length; y++) {
        monthlySpend += add[y].valor
    }
    for (let z; z < add.length; z++) {
        monthlySpend += spendVar[y].valor
    }
    console.log(monthlySpend)

}

function getUserDespesaFixa() {
    let url = DESPESA_FIXA_URL
    let fixedSpend = []
    getJSON(url, function(status, data) {
        fixedSpend = data
    })
    if (fixedSpend == null) {
        return []
    }
    return fixedSpend
}

function getUserDespesaAdd() {
    let url = DESPESA_ADD_URL
    let addSpend = []
    getJSON(url, function(status, data) {
        addSpend = data
    })
    if (addSpend == null) {
        return []
    }
    return addSpend
}

function getUserDespesaVar() {
    let url = DESPESA_VAR_URL
    let varSpend = []
    getJSON(url, function(status, data) {
        varSpend = data
    })
    if (varSpend == null) {
        return []
    }
    return varSpend
}

function getUserReserve() {
    let url = `${RESERVA_URL}`
    let user = []
    getJSON(url, function(status, data) {
        user = data
        this.setPoup(user)
    })
}

function setUserName(user) {
    let userName = document.getElementById('hello-user')
    userName.innerHTML = `<h1>Olá ${user.first_name}!</h1>`
}

function setSal(user) {
    let salario = document.getElementById('txt-salario')
    salario.value = `R$${Number(user.profile.rendaMensal).toFixed(2).replace('.', ',')}`
}

function setPoup(user) {
    let poupanca = document.getElementById('txt-poupanca')
    let poupValue = 0
    for (let i = 0; i < user.length; i++) {
        poupValue += parseFloat(user[i].valor)
    }
    poupanca.value = `R$${poupValue}`
}

function setUserCash(user) {
    let cash = document.getElementById('user-cash')
        // let total = user.valor + user.totalPrevisto
    cash.innerHTML = `<h3><strong>R$${user.profile.saldoAtual.toFixed(2).replace('.',',')}</strong></h3>`
}

function dropSpend() {
    let buttonAdd = document.getElementById('btn-add-spend')
    let buttonUp = document.getElementById('btn-up-spend')
    let setSpend = document.getElementById('set-spend')
    buttonAdd.style.display = 'none'
    buttonUp.style.display = 'flex'
    setSpend.style.display = 'block'
}

function upSpend() {
    let buttonAdd = document.getElementById('btn-add-spend')
    let buttonUp = document.getElementById('btn-up-spend')
    let setSpend = document.getElementById('set-spend')
    buttonAdd.style.display = 'flex'
    buttonUp.style.display = 'none'
    setSpend.style.display = 'none'

}

function dropSalPoupInfo() {
    let dropIcon = document.getElementById('drop-cash-info')
    let upIcon = document.getElementById('up-cash-info')
    let btnSal = document.getElementById('btn-salario')
    dropIcon.style.display = 'none'
    upIcon.style.display = 'flex'
    btnSal.style.display = 'block'
    this.dropPoup()
}

function upSalPoupInfo() {
    let dropIcon = document.getElementById('drop-cash-info')
    let upIcon = document.getElementById('up-cash-info')
    let btnSal = document.getElementById('btn-salario')
    dropIcon.style.display = 'flex'
    upIcon.style.display = 'none'
    btnSal.style.display = 'none'
    this.upPoup()
}

function dropPoup() {
    let dropIcon = document.getElementById('drop-poup-info')
    let upIcon = document.getElementById('up-poup-info')
    let btnPoup = document.getElementById('btn-poupanca')
    dropIcon.style.display = 'none'
    upIcon.style.display = 'flex'
    btnPoup.style.display = 'block'
}

function upPoup() {
    let dropIcon = document.getElementById('drop-poup-info')
    let upIcon = document.getElementById('up-poup-info')
    let btnPoup = document.getElementById('btn-poupanca')
    dropIcon.style.display = 'flex'
    upIcon.style.display = 'none'
    btnPoup.style.display = 'none'
}

function dropMonthInfo() {
    let dropIcon = document.getElementById('drop-month-info')
    let upIcon = document.getElementById('up-month-info')
    let monthSpend = document.getElementById('month-spend')
    dropIcon.style.display = 'none'
    upIcon.style.display = 'flex'
    monthSpend.style.display = 'flex'
}

function upMonthInfo() {
    let dropIcon = document.getElementById('drop-month-info')
    let upIcon = document.getElementById('up-month-info')
    let monthSpend = document.getElementById('month-spend')
    dropIcon.style.display = 'flex'
    upIcon.style.display = 'none'
    monthSpend.style.display = 'none'
}

function dropPlanInfo() {
    let dropIcon = document.getElementById('drop-plan-info')
    let upIcon = document.getElementById('up-plan-info')
    let planContent = document.getElementById('plan-content-info')
    dropIcon.style.display = 'none'
    upIcon.style.display = 'flex'
    planContent.style.display = 'flex'
}

function upPlanInfo() {
    let dropIcon = document.getElementById('drop-plan-info')
    let upIcon = document.getElementById('up-plan-info')
    let planContent = document.getElementById('plan-content-info')
    dropIcon.style.display = 'flex'
    upIcon.style.display = 'none'
    planContent.style.display = 'none'
}
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
        this.getAccountInfo()
        return 'conta'

    } else if (pagePath.indexOf('dashboard.html') >= 0) {
        document.getElementById('dash-link').className += 'active'
        this.getDashInfo()
        this.getUserReserve()
        this.getSpends()
        return 'dashboard'
    }
}

//Account page functions



function getAccountInfo() {
    getJSON(BASE_URL, function(status, data) {
        this.getUserName(data)
        this.compareUserEmail(data)
        this.compareUserPass(data)
    })
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
}

function upUserName() {
    let dropIcon = document.getElementById('name-drop')
    let upIcon = document.getElementById('name-up')
    dropIcon.style.display = "flex"
    upIcon.style.display = "none"
    document.getElementById('user-name-content').style.display = 'none'
    document.getElementById('name-button').style.display = "none"
}

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
        if (txtUserPass.value != user.username) {
            passSpan.style.display = 'block'
        } else {
            passSpan.style.display = 'none'
        }
    }
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

function getSpends() {
    getJSON(DESPESA_FIXA_URL, function(status, data) {
        setFixedSpends(data)
    })
    getJSON(DESPESA_VAR_URL, function(status, data) {
        setVarSpends(data)
    })
    getJSON(DESPESA_ADD_URL, function(status, data) {
        setAddSpends(data)
    })
}

function getSoma(spend) {
    let soma = 0
    for (let i = 0; i < spend.length; i++) {
        soma += spend[i].valor
    }
    return soma
}

function setFixedSpends(fixed_spends) {
    let despFix = document.getElementById('desp-fix')
    let total = getSoma(fixed_spends)
    despFix.value = total
}

function setVarSpends(variable_spends) {
    let despVar = document.getElementById('desp-var')
    let total = getSoma(variable_spends)
    despVar.value = total
}

function setAddSpends(add_spends) {
    let despAdd = document.getElementById('desp-add')
    let total = getSoma(add_spends)
    despAdd.value = total
}

function setSpendChart() {
    let fixed = Number(document.getElementById('desp-fix').value)
    let variable = Number(document.getElementById('desp-var').value)
    let aditional = Number(document.getElementById('desp-add').value)
    var ctx = document.getElementById("myChart")
    var myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Variável', 'Fixa', 'Adicional'],
            datasets: [{
                label: '',
                data: [variable, fixed, aditional],
                backgroundColor: [
                    '#26B99A',
                    '#F0C419',
                    '#E57E25'
                ],
                borderColor: [
                    '#26B99A',
                    '#F0C419',
                    '#E57E25'
                ],
                borderWidth: 1
            }]
        },
        options: {
            legend: {
                display: false
            }
        }
    });
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
    let chart = document.getElementById('graph-month-spend')
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
//Get user info
const BASE_URL = 'https://billwebapp.herokuapp.com/api/despesa/fixa/'
let user = {}

window.onload = () => {
    this.getUserInfo()
}

function getUserName() {
    let txtUserName = document.getElementById('txt-name')
    txtUserName.placeholder = user.categoria
}

function compareUserEmail() {
    let txtUserEmail = document.getElementById('txt-email-atual')
    txtUserEmail.onchange = () => {
        let emailSpan = document.getElementById('email-span')
        if (txtUserEmail.value != user.categoria) {
            emailSpan.style.display = 'block'
        } else {
            emailSpan.style.display = 'none'
        }
    }
}

function compareUserPass() {
    let txtUserPass = document.getElementById('txt-pass-atual')
    txtUserPass.onchange = () => {
        let passSpan = document.getElementById('pass-span')
        if (txtUserPass.value != user.categoria) {
            passSpan.style.display = 'block'
        } else {
            passSpan.style.display = 'none'
        }
    }
}

function getUserInfo() {
    let page = this.getPage()
    let url = `${BASE_URL}`
    getJSON(url, function(status, data) {
        user = data[0]
        if (page == 'dashboard') {
            setUserCash(user)
            setSalPoup(user)
        }

    })
}

function setSalPoup(user) {
    let salario = document.getElementById('txt-salario')
    let poupanca = document.getElementById('txt-poupanca')
    salario.value = `R$${Number(user.totalPrevisto).toFixed(2).replace('.', ',')}`
    poupanca.value = `R$${Number(user.valor).toFixed(2).replace('.', ',')}`
}

function setUserCash(user) {
    let cash = document.getElementById('user-cash')
    let total = user.valor + user.totalPrevisto
    cash.value = `R$${total.toFixed(2).replace('.',',')}`
}

function getJSON(url, callback) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
        let status = xhr.status;
        if (status === 200) {
            console.log("Connection completed");
        } else {
            console.log("Connection failed" + status);
        }
        callback(status, xhr.response)
    }
    xhr.send();
}

//Page functions
function expandUserName() {
    let dropIcon = document.getElementById('name-drop')
    let upIcon = document.getElementById('name-up')
    dropIcon.style.display = "none"
    upIcon.style.display = "block"
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
    dropIcon.style.display = "block"
    upIcon.style.display = "none"
    document.getElementById('user-name-content').style.display = 'none'
    document.getElementById('name-button').style.display = "none"
}

function dropUserEmail() {
    let dropIcon = document.getElementById('email-drop')
    let upIcon = document.getElementById('email-up')
    dropIcon.style.display = "none"
    upIcon.style.display = "block"
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
    dropIcon.style.display = "block"
    upIcon.style.display = "none"
    document.getElementById('user-email-content').style.display = 'none'
    document.getElementById('email-button').style.display = "none"
}

function dropUserPass() {
    let dropIcon = document.getElementById('pass-drop')
    let upIcon = document.getElementById('pass-up')
    dropIcon.style.display = "none"
    upIcon.style.display = "block"
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
    dropIcon.style.display = "block"
    upIcon.style.display = "none"
    document.getElementById('user-pass-content').style.display = 'none'
    document.getElementById('pass-button').style.display = "none"
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

function getPage() {
    let pagePath = window.location.pathname
    if (pagePath.indexOf('conta.html') >= 0) {
        document.getElementById('acc-link').className += 'active'
        return 'conta'

    } else if (pagePath.indexOf('dashboard.html') >= 0) {
        document.getElementById('dash-link').className += 'active'
        return 'dashboard'
    }
}
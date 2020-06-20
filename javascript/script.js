//Get user info
const BASE_URL = 'https://billwebapp.herokuapp.com/api/despesa/fixa/'

window.onload = () => {
    this.getUserInfo()
}

function getUserName(data) {
    let txtUserName = document.getElementById('txt-name')
    txtUserName.placeholder = data.categoria
}

function compareUserEmail(data) {
    let txtUserEmail = document.getElementById('txt-email-atual')
    txtUserEmail.onchange = () => {
        let emailSpan = document.getElementById('email-span')
        if (txtUserEmail.value != data.categoria) {
            emailSpan.style.display = 'block'
        } else {
            emailSpan.style.display = 'none'
        }
    }
}

function compareUserPass(data) {
    let txtUserPass = document.getElementById('txt-pass-atual')
    txtUserPass.onchange = () => {
        let passSpan = document.getElementById('pass-span')
        if (txtUserPass.value != data.categoria) {
            passSpan.style.display = 'block'
        } else {
            passSpan.style.display = 'none'
        }
    }
}

function getUserInfo() {
    let url = `${BASE_URL}`
    getJSON(url, function(status, data) {
        console.log(data[0])
        this.getUserName(data[0])
        this.compareUserEmail(data[0])
        this.compareUserPass(data[0])
    })
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
}

function upUserPass() {
    let dropIcon = document.getElementById('pass-drop')
    let upIcon = document.getElementById('pass-up')
    dropIcon.style.display = "block"
    upIcon.style.display = "none"
    document.getElementById('user-pass-content').style.display = 'none'
    document.getElementById('pass-button').style.display = "none"
}
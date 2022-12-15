let passwordLength = document.getElementById('passwordLength');
let password = document.getElementById('password');
let saveButton = document.getElementById('saveButton')

const generatePassword = (len) =>{ //len = passwordLength
    const lowerText = "qwertyuiopasdfghjklzxcvbnm"
    const upperText = "QWERTYUIOPASDFGHJKLZXCVBNM"
    const numeric = "1234567890"
    const symbol = "!@#$%^&*()?<>;[]{}"

    const data = lowerText + upperText + numeric + symbol
    let generator = '';
    for (let i = 0; i < len; i++){
        generator += data[~~(Math.random() * data.length)];
    }
    return generator
}

const getPassword = () => {
    const newPassword = generatePassword(passwordLength.value)
    password.value = newPassword
    // setTimeout(() => {
    //     alert('password generated !');
    // }, 2000)
}

function savePassword(){
    document.title = password.value
    saveButton.setAttribute('href', 'data:text/plain:charset=utf-8,' + encodeURIComponent('password saya:' + document.title))
    saveButton.setAttribute('download', 'MyPassword.txt')
    // setTimeout(() => {
    //     alert('saved !');
    // }, 1000)
}
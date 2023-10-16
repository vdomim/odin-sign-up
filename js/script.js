const pass = document.querySelector('#pass')
const passConfirm = document.querySelector('#pass_confirm')
const validator = document.querySelector('.validator')
const submit = document.querySelector('.submit')
const form = document.querySelector('form')
let passCheck = false

passConfirm.addEventListener('input', () => {
    if(pass.value !== passConfirm.value){
        passConfirm.style.border = '2px solid red';
        passCheck=false
        passConfirm.validationMessa
        passConfirm.setCustomValidity("Las contraseñas deben de coincidir")
    }
    else{
        passConfirm.style.border = '';
        passCheck=true
        passConfirm.setCustomValidity("")
    }
})

validator.addEventListener('click', (e) => {
    e.preventDefault()
    submit.click()
})
const pass = document.querySelector('#pass')
const passConfirm = document.querySelector('#pass_confirm')
passConfirm.addEventListener('input', () => {
    if(pass.value !== passConfirm.value){
        console.log("no coincide");
    }
})
console.log("hola");
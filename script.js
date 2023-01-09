const password = document.querySelector('#password');
const confPassword = document.querySelector('#confPassword');
const but = document.querySelector('#but');
const error = document.querySelector('emailError');

but.addEventListener('click', function(){
    if (password.value != confPassword.value){  
        alert("hola");
    }
    else{
        console.log("nola");
    }
})

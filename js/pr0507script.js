let formulario = document.forms[0];
let email = formulario.elements.email;
let password = formulario.elements.pass1;
let password2 = formulario.elements.pass2;
let pass1 = document.getElementById('seguridad');
let contraseñasIguales = document.getElementById('igualPass');

email.onblur = function() {
    if (!email.value.includes('@' && '.')) { 
            error.classList.add("noValido");
            error.innerHTML = 'El correo no es válido.'
        }
    };
email.onfocus = function() {
    if (error.classList.contains('noValido')) {
            error.classList.remove('noValido');
        error.innerHTML = "";
    }
};

password.onblur = function() {
    if( password.value.length < 4 ){
        pass1.innerHTML = "MUY DÉBIL";
    }else if ( password.value.length < 8 ){
        pass1.innerHTML = "DÉBIL";
    }else if ( password.value.length < 10 ){
        pass1.innerHTML = "ACEPTABLE";
    }else if ( password.value.length < 12 ){
        pass1.innerHTML = "FUERTE";
    }else if ( password.value.length < 14 ){
        pass1.innerHTML = "MUY FUERTE";
    }
   
};

password2.onblur = function() {
    if (password.value != password2.value){
        contraseñasIguales.classList.toggle('igualPass');
        contraseñasIguales.innerHTML = "Las contraseñas no coinciden";
    }else {
        contraseñasIguales.classList.toggle('igualPass');
        contraseñasIguales.innerHTML = "";
    }
   
};






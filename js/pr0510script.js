let formulario = document.forms[0];

let fecha = formulario.elements.fecha;
let fechaValidar = document.getElementById("fechaValidar");

let telf = formulario.elements.telf;
let telfValidar = document.getElementById("telfValidar");

let correo = formulario.elements.correo;
let correoValidar = document.getElementById("correoValidar");

let color = formulario.elements.color;
let colorValidar = document.getElementById("colorValidar");

let ip = formulario.elements.ip;
let ipValidar = document.getElementById("ipValidar");

let url = formulario.elements.url;
let urlValidar = document.getElementById("urlValidar");

let nif = formulario.elements.nif;
let nifValidar = document.getElementById("nifValidar");

let mat = formulario.elements.mat;
let matValidar = document.getElementById("matValidar");

function validarFecha() {
    let string = fecha.value;
    if(string.match(/^(0?[1-9]|[12][0-9]|3[01])[\/](0?[1-9]|1[012])[\/\-]\d{4}/)){
        fechaValidar.innerHTML = "<p>Fecha válida</p>";
    }else{
        fechaValidar.innerHTML = "<p>Fecha no válida</p>";
    }
}

fecha.onchange = function() {
    validarFecha();
};

function validarTelf(){
    let string = telf.value;
    if(string.match(/(\+34)([\s])?9[0-9]{2}[\s]?[0-9]{3}[\s]?[0-9]{3}/)){
        telfValidar.innerHTML = "<p>Teléfono válido</p>";
    }else{
        telfValidar.innerHTML = "<p>Teléfono no válido</p>";
    }
}

telf.onchange = function() {
    validarTelf();
};

function validarCorreo(){
    let string = correo.value;
    if(string.match(/^[a-zA-z]+[@mail.com|@educa.jcyl.es|@mail.es]/)){
        correoValidar.innerHTML = "<p>Correo válido</p>";
    }else{
        correoValidar.innerHTML = "<p>Correo no válido</p>";
    }
}

correo.onchange = function() {
    validarCorreo();
};

function validarColor(){
    let string = color.value;
    if(string.match(/[#][0-9a-fA-Z]{6}/)){
        colorValidar.innerHTML = "<p>Color válido</p>";
    }else{
        colorValidar.innerHTML = "<p>Color no válido</p>";
    }
}

color.onchange = function() {
    console.log(color.value);
    validarColor();
};

function validarIp(){
    let string = ip.value;
    if(string.match(/\b(?:(?:2((?:[0-4][0-9]|5[0-5])|[0-1]?[0-9]?[0-9])\.){3}(?:(?:2[0-4][0-9]|5[0-5])|[0-1]?[0-9]?[0-9]))\b/gi)){
        ipValidar.innerHTML = "<p>IP válida</p>";
    }else{
        ipValidar.innerHTML = "<p>IP no válida</p>";
    }
}

ip.onchange = function() {
    console.log(ip.value);
    validarIp();
};

function validarUrl(){
    let string = ip.value;
    if(string.match(/((https:\/\/)|(http:\/\/)){1}[a-z]+((.es)|(.com))/)){
        urlValidar.innerHTML = "<p>URL válida</p>";
    }else{
        urlValidar.innerHTML = "<p>URL no válida</p>";
    }
}

url.onchange = function() {
    console.log(url.value);
    validarUrl();
};

function validarNif(){
    let string = nif.value;
    if(string.match(/[0-9]{7,8}[A-Z]{1}/)){
        nifValidar.innerHTML = "<p>NIF válido</p>";
    }else{
        nifValidar.innerHTML = "<p>NIF no válido</p>";
    }
}

nif.onchange = function() {
    console.log(nif.value);
    validarNif();
};

function validarMat(){
    let string = mat.value;
    if(string.match(/[0-9]{4}[A-Z]{3}/)){
        matValidar.innerHTML = "<p>Matrícula válida</p>";
    }else{
        matValidar.innerHTML = "<p>Matrícula no válida</p>";
    }
}

mat.onchange = function() {
    console.log(mat.value);
    validarMat();
};


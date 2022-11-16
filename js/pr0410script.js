function colorFondo(){
    let numero = Math.floor(Math.random()*256*256*256).toString(16).padStart(6, '0');
    console.log(numero)
    
    return document.body.style.backgroundColor = '#' + numero;
}
let btn = document.getElementById('btn');
btn.addEventListener("click", colorFondo);
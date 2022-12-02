let puntuacion = document.getElementById("puntuacion"); 

let numClicks = 0;

let intervalo;

let dificultad = 1;


//añadir listener de click al objeto y botones de start y stop
let objeto = document.getElementById("objeto");
let botonStop = document.getElementById("stop");
let start = document.getElementById("start");

objeto.addEventListener('click', setPosicion);
objeto.addEventListener('click', colorFondo);
start.addEventListener('click', startTime);
botonStop.addEventListener('click', stopTime);
window.addEventListener('resize', position);


//añadir listener a btn de dificultad
let btns_diff = document.querySelectorAll("#diff");
    btns_diff.forEach( (item) => {
        item.addEventListener('click', setDificultad);
    } )


//funcion para añadir +1 con cada click a puntuacion
function puntuacionActual() {
    numClicks += 1;
    let puntuacion = document.getElementById("puntuacion");
    puntuacion.textContent = numClicks;
}


//selector de dificultad
function setDificultad(e){
    let target = e.target;
    dificultad = target.textContent;
}


//funcion para cambiar posicion y tamaño el objeto segun dificultad
function setPosicion(){
    let diff_size = Math.floor(250 / dificultad) - 10;

    let top =  Math.floor(Math.random() * innerHeight) + "px";
    let left = Math.floor(Math.random() * (innerWidth + 180));
    let width = Math.floor(Math.random() * diff_size) + 10;
    let height = Math.floor(Math.random() * diff_size) + 10;
    left += "px";
    width += "px";
    height += "px";

    objeto.style.top = top;
    objeto.style.left = left;
    objeto.style.width = width;
    objeto.style.height = height;
}


//funcion iniciar partida y tiempo
function startTime(){

    //bloquea la dificultad al iniciar partida
    let btns_diff = document.querySelectorAll("#diff");
    btns_diff.forEach( (item) => {
        item.removeEventListener('click', setDificultad);
    } )
    let contador = 0;
    start.removeEventListener('click', startTime);
    objeto.addEventListener('click', puntuacionActual);

    intervalo = setInterval(function(){ 
        if(contador > 20){
            clearInterval(intervalo);
            //eliminar el listener de puntuacionActual y añadir el de inicio de tiempo
            start.addEventListener('click', startTime);
            objeto.removeEventListener('click', puntuacionActual);

            //al terminar el tiempo la puntuacion se pone a 0
            let puntuacion = document.getElementById("puntuacion");
            alert("La puntuación es de " + puntuacion.textContent);
            puntuacion.textContent = 0;

            let btns_diff = document.querySelectorAll("#diff");
                btns_diff.forEach( (item) => {
                item.addEventListener('click', setDificultad);
                } )
        }else{
            contador += 0.1; 
            document.getElementById("tiempo").innerHTML=contador.toFixed(1); 
        }
     }, 100);
}


//parar la partida
function stopTime(){
    window.clearInterval(intervalo);
    start.addEventListener('click', startTime);
    objeto.removeEventListener('click', puntuacionActual);

    //al terminar el tiempo la puntuacion se pone a 0
    let puntuacion = document.getElementById("puntuacion");
    alert("La puntuación es de " + puntuacion.textContent);
    puntuacion.textContent = 0;

    let tiempo = document.getElementById("tiempo");
    tiempo.textContent = 0;

    let btns_diff = document.querySelectorAll("#diff");
    btns_diff.forEach( (item) => {
        item.addEventListener('click', setDificultad);
    } )
}


//cambia el color del fondo y del objeto 
function colorFondo(){
    let numero = Math.floor(Math.random()*256*256*256).toString(16).padStart(6, '0');
    let numero2 = Math.floor(Math.random()*256*256*256).toString(16).padStart(6, '0');
    let objeto = document.getElementById("objeto");
    objeto.style.backgroundColor = '#' + numero2;
    return document.body.style.backgroundColor = '#' + numero;
}




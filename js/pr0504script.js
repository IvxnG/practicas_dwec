// let body = document.getElementsByName("body");
let header = document.getElementById("header"); 

//variable que cuenta los clicks en el objeto
let numClicks = 0;

//añadir listener de click al objeto
let objeto = document.getElementById("objeto");
objeto.addEventListener('click', contador);
objeto.addEventListener('click', position);
window.addEventListener('resize', position);

//funcion para añadir +1 con cada click
function contador() {
    numClicks += 1;
    header.textContent = numClicks;
    console.log(numClicks);
}

//funcion para cambiar posicion y tamaño
function position(){
    console.log();
    let top =  Math.floor(Math.random() * innerHeight) + "px";
    let left = Math.floor(Math.random() * innerWidth) + "px";
    let width = Math.floor(Math.random() * 170) + "px";
    let height = Math.floor(Math.random() * 200) + "px";

    objeto.style.top = top;
    objeto.style.left = left;
    objeto.style.width = width;
    objeto.style.height = height;
}


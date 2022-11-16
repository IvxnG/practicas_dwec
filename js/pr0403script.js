//Numero de parrafos
let numParrafos = document.querySelectorAll('p');
document.getElementById('parrafos').innerHTML= numParrafos.length;


//Direccion 2 enlace
let enlaces = document.querySelectorAll('a');
document.getElementById('segundo-enlace').innerHTML= enlaces[1];


//Num enlaces a google.es
let googlees = 0;
enlaces.forEach( element => {
    console.log(element.href);
    if(element.href == "https://www.google.es/"){
        googlees++;
    }
});
console.log(googlees);
document.getElementById('links-google-es').innerHTML= googlees;


//Numero de palabras 2 parrafo
let palabras = document.querySelectorAll('p');
Array.from('palabras');
let num = palabras[1]
                .textContent
                .trim()
                .split(' ');
document.getElementById('palabras-segundo-parrafo').innerHTML= num.length;



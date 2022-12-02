
let letras = "ABCDEFGHIJKLMNÑOPKRSTUVWXYZ";

let conjuntoLetras = document.getElementById('keyboard');
let conjuntoEspacios = document.getElementById('spaces');


iniciarJuego();


//crea las letras en pantalla
for (let i = 0; i <= 26; i++) {
    let letra = letras.charAt(i);

    let casillaLetra = document.createElement('span');
    casillaLetra.classList.add("key");
    casillaLetra.textContent = letra;
    casillaLetra.addEventListener('click' , letraElegida);
    conjuntoLetras.appendChild(casillaLetra);
}

function letraElegida(e){
    let letra = e.target.textContent;
    console.log(letra);

    
    e.target.removeEventListener('click' , letraElegida);
    e.target.classList.toggle("pressed");
}  

function iniciarJuego(){
    let posicionPalabra = Math.floor(Math.random() * 60487) ;
    let palabraAdivinar = words[posicionPalabra];
    
    let letrasDeLaPalabra = [];
    
    let espacios = palabraAdivinar.length;
    for (i = 0; i < palabraAdivinar.length ; i++) {
        letrasDeLaPalabra.push(palabraAdivinar.slice(i,i + 1));
    }
    console.log(letrasDeLaPalabra);
    for (i = 0; i < espacios;i++) {
        let espacioBlanco = document.createElement('span');
        espacioBlanco.classList.add("space");
        espacioBlanco.id = i;
        espacioBlanco.textContent = "";
        conjuntoEspacios.appendChild(espacioBlanco);
    }


}
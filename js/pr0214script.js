let numero =  prompt('Número para el factorial.');
let resultado = 1;

function fact(numero){
    for(let i = 1; i <= numero; i++){
        resultado = resultado * i;
    }
    return resultado;
}
console.log(fact(numero));
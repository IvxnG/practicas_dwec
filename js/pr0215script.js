let numeroA =  prompt('Introduce el primer número.');
let numeroB =  prompt('Introduce el segundo número.');
let operador =  prompt('Operador.');
let resultado = 1;

let numero1 = Number(numeroA);
let numero2 = Number(numeroB);
function calc(numero1, numero2,operador){
    switch(operador){
        case '+':
            resultado = numero1 + numero2;
            break;
        case '-':
            resultado = numero1 - numero2;
            break;
        case '*':
            resultado = numero1 * numero2;
            break;
        case '/':
            resultado = numero1 / numero2;
            break;
        case '%':
            resultado = numero1 % numero2;
            break;
        case '!':
            for(let i = 1; i <= numero1; i++){
                resultado = resultado * i;
            }
            break;
        default:
            resultado = 'Operador no válido';
    }
    return resultado;
}
console.log(calc(numero1,numero2,operador));
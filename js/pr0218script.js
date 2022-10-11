let lado1 = prompt('Primer lado');
let lado2 = prompt('Segundo lado');
let lado3 = prompt('Tercer lado');

function isValidTriangle(lado1, lado2, lado3){
    return ((lado1 + lado2) > lado3 && (lado2 + lado3) > lado1 && (lado1 + lado3) > lado2)
    ;
}
console.log(isValidTriangle(lado1, lado2, lado3));
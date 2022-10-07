let lado1 = prompt('Primer lado');
let lado2 = prompt('Segundo lado');
let lado3 = prompt('Tercer lado');

function triangulo(lado1, lado2, lado3){
    if((lado1 + lado2) > lado3 && (lado2 + lado3) > lado1 && (lado1 + lado3) > lado2) {
        return true;
    }else{
        return false;
    }
}
console.log(triangulo(lado1, lado2, lado3));
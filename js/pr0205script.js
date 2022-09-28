let numero = prompt('Introduce un número');

console.log(Number.isInteger(+numero));

while(Number.isInteger(+numero) == false){
    numero = prompt('Introduce un número');
}

let datos = (`Has introducido en numero ${ numero }`);
alert(datos);

let numeroN = prompt('Introduce un número');
let numerok = prompt('Introduce un número');

for (let i = 1; i<=numerok; i++) {
    let datos = (`${ numeroN }* ${i} = ` + numeroN * i);
    console.log(datos);
    
}
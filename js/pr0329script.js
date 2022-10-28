let arr = [
    {
        nombre: 'Pepe',
        ape1: 'Pérez',
        ape2: 'López',
        dni: '10100100',
        expediente: '1720',
        pass: '1234ABC',
        ciclo: 'DAW',
        notas: {
            DWEC: 7.8,
            DIW: 5.4,
            DWES: 9.4
        }
    },
    {
        nombre: 'Juan',
        ape1: 'Mázquez',
        ape2: 'Hernández',
        dni: '7340831',
        expediente: '342',
        pass: 'P@ssw0rd',
        ciclo: 'DAW',
        notas: {
            DWEC: 8,
            DIW: 5.2,
            DWES: 4
        }
    },
    {
        nombre: 'Pedro',
        ape1: 'Blanco',
        ape2: 'Martin',
        dni: '7906756',
        expediente: '345',
        pass: 'Passs',
        ciclo: 'DAW',
        notas: {
            DIW: 5.2,
            DWES: 7
        }
    }
];

function mediaNotas(array){
    suma = 0;
    countNotas = 0;

    let valores = Object.values(array);
    for(let i=0; i< valores.length; i++){
        
        suma = suma + valores[i];
        countNotas++;
    }
    return Math.round(suma/countNotas);
}
function getAverages() {
    return arr.map(dato =>{
        return {Alumno : dato.nombre + " " + dato.ape1 + " " + dato.ape2, Expediente : dato.expediente, NotaMedia :  mediaNotas(dato.notas)}
        } 
    )
}

console.log(getAverages());
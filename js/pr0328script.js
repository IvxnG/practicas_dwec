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
]

function getUsernames(){
    arr.forEach(user => {
        let parte1 = user.nombre.toLowerCase();
        
        let parte2 = user.ape1.toLowerCase()
                              .slice(0,1);

        let parte3= user.ape2.toLowerCase()
                            .slice(0,1);

        let username = parte1 + parte2 + parte3;
        
        user.username = username;
      });
    console.log(arr);
};
console.log(getUsernames());
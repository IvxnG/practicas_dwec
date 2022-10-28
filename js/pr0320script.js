let fechas = ['01-05-2022', '02-12-2018', '14-02-2020'];

function sortDates(arr){
    // arr.forEach(element => {
    //    
    //     let anio = fechaSplit[2];
    //     let mes = fechaSplit[1];
    //     let dia = fechaSplit[0];

    //     let cadenaFecha = anio + mes + dia;
        
    //     arr = arr.filter((item) => item !== element)
    //     arr.push(cadenaFecha);

    // });
    arr.sort( (a, b) => {
        let strA = a.slice(6) + a.slice(3, 5) + a.slice(0, 2);
        let strB = b.slice(6) + b.slice(3, 5) + b.slice(0, 2);
        
        return strA < strB ? -1 : 1;     
    } );
    
    console.log(arr);
};
console.log(sortDates(fechas));
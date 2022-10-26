let modulo = prompt('Nombre del módulo (DWEC , DWES , DIW , DESPLIEGUE , EMPRESA)');
let modulos = [
    DWEC =[5,6,8],
    DWES =[6,7,6],
    DIW =[8,9,5],
    DESPLIEGUE =[5,5,7],
    EMPRESA =[7,6,7],
];


function getAverageGrade(str){

    let sum = modulos.str.reduce((previous, current) => current += previous);
    let avg = sum / modulos.str.length;
    console.log("La media de notas del módulo es "+ avg);
};
console.log(getAverageGrade(modulo));
let modulo = prompt('Nombre del módulo (DWEC , DWES , DIW , DESPLIEGUE , EMPRESA)');
let modulos = [
    DWEC =[5,6,8],
    DWES =[6,7,6],
    DIW =[8,9,5],
    DESPLIEGUE =[5,5,7],
    EMPRESA =[7,6,7],
];
let suma = 0;

function getAverageGrade(str){
    let total = str.reduce((a, b) => Number(a) + Number(b), 0);
    let avg = total / str.length;
    console.log("La media de notas del módulo es "+ avg);
};
console.log(getAverageGrade(modulo));
let fechaNac = prompt('Introduce tu año de nacimiento');

if(fechaNac < 1949 || fechaNac > 2010){
    alert(`Fecha de nacimiento no es válida.`);
} if (fechaNac >= 1949 && fechaNac <= 1968){
    alert(`Baby Boomer`);
} if (fechaNac >= 1969 && fechaNac <= 1980){
    alert(`Generación X`);
} if (fechaNac >= 1981 && fechaNac <= 1993){
    alert(`Generación Millenial`);
} if (fechaNac >= 1994 && fechaNac <= 2010){
    alert(`Generación Z`);
}
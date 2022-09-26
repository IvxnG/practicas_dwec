let name = prompt('Cual es tu nombre');
let notaPrimerExamen = prompt('Nota en el primer examen');
let notaSegundoExamen = prompt('Nota en el segundo examen');

Number(notaPrimerExamen);
Number(notaSegundoExamen);

let notaMedia = (`  ${notaPrimerExamen + notaSegundoExamen}`)/2;

let datos = (`Hola ${ name }, la nota media de tus exámenes es ${ notaMedia }`);
alert(datos);
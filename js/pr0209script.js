let calle1 = prompt('Introduce tu calle.');
let calle = calle1.toLowerCase();
console.log(calle);

if(calle == "calle los claveles" || calle ==     "calle el rosal" 
|| calle == "calle las hortensias" || calle == "calle las margaritas"){
    alert(`Tienes que tomar la Línea 1 para ir desde ${ calle1 } hasta el trabajo.`);
}if(calle == "calle teleno" || calle == "calle catoute" 
|| calle == "calle peña ubiña" || calle == "calle Vizcodillo"){
    alert(`Tienes que tomar la Línea 2 para ir desde ${ calle1 } hasta el trabajo.`);
}if(calle == "calle astorga" || calle == "calle la bañeza" 
|| calle == "calle benavente"){
    alert(`Tienes que tomar la Línea 1 para ir desde ${ calle1 } hasta el trabajo.`);
}else{
    alert(`No hay buses cerca de ${ calle1 }.`);
}       
let radio = prompt('Radio del círculo');

let radioN = Number(radio);

let perimetroCirculo = 2 * 3.14 * radioN;
let areaCirculo = perimetroCirculo * (radioN * radioN);


let datos = (`El perímetro del círculo de radio ${ radioN } es ${ perimetroCirculo }
y su área es ${ areaCirculo }`);
alert(datos);
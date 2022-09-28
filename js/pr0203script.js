let kgManzanas = prompt('Manzanas');
let kgNaranjasnas = prompt('Naranjas');
let kgPlatano = prompt('Platanos');

let $kg = Number(kgManzanas) + Number(kgNaranjasnas) + Number(kgPlatano);

let $precio = Number(kgManzanas)*2 + Number(kgNaranjasnas)*1.6 + Number(kgPlatano)*0.9;

let $datos = (`Has comprado un total de ${ kg } de fruta y te ha costado ${ precio } euros`)

alert (datos);
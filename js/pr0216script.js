let cantidad = prompt('Cantidad a convertir');
let unidad = prompt('Unidad de medida');
let bytes = 0;

function convertToBytes( cantidad, unidad ){

    switch(unidad){
        case "B":
        case "Byte":
            bytes = cantidad * 1;
        break;
        case "KB":
        case "Kilobyte":
            bytes = cantidad * 1000;
        break;
        case "MB":
        case "Megabyte":
            bytes = cantidad * 1000000;
        case "GB":
        case "Gigabyte":
            bytes = cantidad * 1000000000;
        break;
        case "TB":
        case "Terabyte":
            bytes = cantidad * 1000000000000;
        break;
        case "PB":
        case "Petabyte":
            bytes = cantidad * 1000000000000000;
            break;
        case "EB":
        case "Exabyte":
            bytes = cantidad * 1000000000000000000;
        break;
        default:
            bytes = 'No válido';
        break;
    }
    return bytes + " bytes";
} 

console.log(convertToBytes( cantidad, unidad)); 
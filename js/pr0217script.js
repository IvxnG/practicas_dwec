let n = prompt('Cantidad a convertir:');
let from = prompt('Unidad de medida:');
let to = prompt('Unidad a la que pasar:');
let bytes = 0;

function convertCapacity( n, to){
    
    switch(to){
        case "B":
        case "Byte":
            bytes = n * 1;
        break;
        case "KB":
        case "Kilobyte":
            bytes = n * 1000;
        break;
        case "MB":
        case "Megabyte":
            bytes = n * 1000000;
        case "GB":
        case "Gigabyte":
            bytes = n * 1000000000;
        break;
        case "TB":
        case "Terabyte":
            bytes = n * 1000000000000;
        break;
        case "PB":
        case "Petabyte":
            bytes = n * 1000000000000000;
            break;
        case "EB":
        case "Exabyte":
            bytes = n * 1000000000000000000;
        break;
        default:
            bytes = 'No válido';
        break;
    }
    return bytes;

} 
function convertToBytes( n, from ){
    convertCapacity(n, to);
    switch(from){
        case "B":
        case "Byte":
            n = n * 1;
        break;
        case "KB":
        case "Kilobyte":
            n = n * 1000;
        break;
        case "MB":
        case "Megabyte":
            n = n * 1000000;
        case "GB":
        case "Gigabyte":
            n = n * 1000000000;
        break;
        case "TB":
        case "Terabyte":
            n = n * 1000000000000;
        break;
        case "PB":
        case "Petabyte":
            n = n * 1000000000000000;
            break;
        case "EB":
        case "Exabyte":
            n = n * 1000000000000000000;
        break;
        default:
            n = 'No válido';
        break;
    }
    return n;
} 

console.log(convertToBytes( n, from, to)); 
let numero = prompt('Introduce un número.');

while(+numero != 0){
    numero = prompt('Introduce un número.');
    console.log("¿es primo? ", isPrime(numero));
    
}
function isPrime(numero){
	if (numero == 0 || numero == 1 || numero == 4) return false;
	for (let x = 2; x < numero / 2; x++) {
		if (numero % x == 0) return false;
	}
	return true;
}

let k =  prompt('Números primos que se mostrarán.');
let impreso = 0;
let contador = 1;

function isPrime(numero){
	if (numero == 0 || numero == 1 || numero == 4) return false;
	for (let x = 2; x < numero / 2; x++) {
		if (numero % x == 0) return false;
	}
	return true;
}

while(k != impreso){
    contador++;
    if(isPrime(contador)){
        console.log(contador);
        impreso++;
    }
}




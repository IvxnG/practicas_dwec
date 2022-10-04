let k =  prompt('Números primos que se mostrarán.');

function isPrime(numero){
	if (numero == 0 || numero == 1 || numero == 4) return false;
	for (let x = 2; x < numero / 2; x++) {
		if (numero % x == 0) return false;
	}
	return true;
}

if(true){
    for(let i = 0; i <= k ; i++){
        if(isPrime(i) == true){
            console.log(i);
        }
        
    }
}


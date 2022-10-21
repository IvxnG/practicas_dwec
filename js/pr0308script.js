let texto = prompt("Cadena");
let minusculas = texto.toLocaleLowerCase();

function countLeters(str) {
	
	let numLetras = {};

	for (let i = 0; i <str.length; i++) {
		let letra = str[i];

		// Crea un valor para el objeto si la letra no existe en él
		if (!numLetras[letra]) {
			numLetras[letra] = 1;

		//suma 1 a la letra
		} else {
			numLetras[letra]++;
		}
	}

	return numLetras;
};

console.log(countLeters(minusculas));
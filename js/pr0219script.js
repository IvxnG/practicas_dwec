let n = prompt('Primer número (n)');
let k = prompt('Segundo número (k)');
let result = 0;

function sumOfMults(n, k){
    for (let i = 1; i <= k ; i++) {
		result = result + (n*i);
	}
    return result;
}
console.log(sumOfMults(n, k));
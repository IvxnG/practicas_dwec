let n = prompt ('Número (n)');
let fibonacii = 2;

function getFibonacii(n){
    for (let i = 1; i <= n ; i++) {
		fibonacii = fibonacii + (fibonacii-1);
	}
    return fibonacii;
}
console.log(getFibonacii(n));
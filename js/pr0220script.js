let n = prompt ('Número (n)');

function getFibonacii(n){
    if (((n == 1)) || (n == 0)){
        return n;
    }else{ 
        return getFibonacii(n-1) + getFibonacii(n-2);
    }
}
console.log(getFibonacii(n));
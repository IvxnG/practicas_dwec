let numeros = [1,2,3,4,5,6,7,8,9,10];
let pow = 3;
let pows = [];
let numPow = "";

function createPow(arr, pow){
    arr.forEach(numero => {
        numPow= numero**pow;
        pows.push(numPow);
      });
      console.log(pows);
};



console.log(createPow(numeros, pow));
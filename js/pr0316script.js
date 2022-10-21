let numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

let odds = [];
function getOdds(arr){
    arr.forEach(numero => {
        if (numero % 2 !== 0) {
          odds.push(numero);
        }
      });
      console.log(odds);
};



console.log(getOdds(numeros));
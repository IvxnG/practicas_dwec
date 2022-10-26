let nums = [2,4,6,8,10,12,14,16,18,20,];
let suma = 0;

function max(arr){
    suma = arr.reduce( (acum, item, index, array)  => {
        return acum + item;
        }, 0 )
    return suma;
};
console.log(max(nums));
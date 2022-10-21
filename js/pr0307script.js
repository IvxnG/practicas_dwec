let texto = prompt("Cadena");
let minusculas = texto.toLocaleLowerCase();

function countVowels(str) { 
    let vocales = str.match(/[aeiou]/gi).length;
    return "Vocales: "+vocales;
}
console.log(countVowels(minusculas));
let texto = prompt("Texto");

function removeVowels(str){
    sinVocales = str.replaceAll("a","")
                    .replaceAll("A","")
                    .replaceAll("e","")
                    .replaceAll("E","")
                    .replaceAll("i","")
                    .replaceAll("I","")
                    .replaceAll("o","")
                    .replaceAll("O","")
                    .replaceAll("u","")
                    .replaceAll("U","");
    
    return sinVocales;
}
console.log(removeVowels(texto));

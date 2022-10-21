let usuarios = [
    { name : "Ivan" ,surname : "González"},
    { name : "Marcos" ,surname : "Fernandez"},
    { name : "Pedro" ,surname : "Martinez"},
];
let nickname1 = "";
let nickname2 = "";
let numeros = Math.floor(Math.random()*10);


function generateUsername(arr){
    arr.forEach(user => {
        nickname1 = user.name.toLowerCase().slice(0,1);
        nickname2 = user.surname.toLowerCase();
        numero1 = Math.floor(Math.random()*10);
        numero2 = Math.floor(Math.random()*10);
        let nicknameGenerado = nickname1+nickname2+numero1+numero2;
        user.nickname = nicknameGenerado;
      });
      console.log(usuarios);
};



console.log(generateUsername(usuarios));
let usuarios = [
    { nombre : 'Pedro'},
    { nombre : 'Fernando'},
    { nombre : 'Marcos'},
];

function sendMessage(usuarios){
    usuarios.forEach(usuario => {
        console.log(`Hola , ${ usuario.nombre }, bienvenido al curso de DWEC.`);
    });
    
};

console.log(sendMessage(usuarios));
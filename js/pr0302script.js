let user1 = {};
let dato1, dato2;
while (true) {
    dato1 = prompt('Introduce un nombre de dato');
    dato2 = prompt('Introduce el dato');
    if (!dato1) break;
    user1[dato1] = dato2;
};

let user2 = {};
let dato3, dato4;
while (true) {
    dato3 = prompt('Introduce un nombre de dato(Objeto 2)');
    dato4 = prompt('Introduce el dato');
    if (!dato3) break;
    user2[dato3] = dato4;
};


function mergeObjects(user1,user2){
    let userList = {
        ...user1,
        ...user2,
    };
    console.log(userList);
}
console.log(mergeObjects(user1,user2));
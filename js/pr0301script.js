let user = {
    name : "Iván",
    surname : "González",
};


function cloneObject(user){
    let userClone = Object.assign({}, user);
    console.log(userClone);
}
console.log(cloneObject(user));
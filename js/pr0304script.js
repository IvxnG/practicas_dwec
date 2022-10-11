let obj1 = {
    cosa : "nada",
    cosa2 : "algo",
    cosa5 : 2,
}

let obj2 = {
    cosa : "nada",
    cosa2 : "algo",
    cosa3 : 3,
}

function containsObject(a, b) {
    for (let key in b) {
        if (!(key in a)) {
            return false;
        }
    }
    return true;
}

console.log(containsObject(obj1,obj2));
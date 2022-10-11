
let a = {
    b : "algo",
    c : undefined,
}

function removeUndefined(a) {
    let b = {};

    for (let key in a) {
        if (a[key] != undefined) {
            b[key] = a[key];
        }
    }
    return b;
}
console.log(removeUndefined(a));
let content = document.getElementById('content');

//crear el nodo
let div = document.createElement('div');
div.innerHTML('Hola Mundo!!!');

//insertar despues pero dentro
content.append( div );
//insertar antes pero dentro
content.prepend( div );

console.log(div);

//eliminar o añadir elementos a clases de objetos.
content.classList.add("");
content.classList.remove("");

//Click sobre el elemento se cambia su clase.
//en css poner cursor:pointer.
item2.addEventListener('click', () => {
    item2.classList.toggle("active");
})

//Modificar contenido de todos los items sin ponerlos uno a uno.
items.forEach( (item) => {
    item.addEventListener('click', (e) =>  e.target.classList.toggle('active'));
});

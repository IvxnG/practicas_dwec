function añadirTareas(){
    let texto = document.getElementById("tarea");

    let listaTarea = document.createElement('li');

    let id=(Math.random()*10).toFixed(3);
    listaTarea.id = id;

    listaTarea.innerHTML = texto.value;

    let btn = document.createElement('button');
    btn.textContent = "Borrar";
    btn.setAttribute('data-id', id);
    listaTarea.append(btn);
    btn.addEventListener( 'click', deleteTask);
    let list = document.getElementById("tareas");
    list.append(listaTarea);
    return true;
}
let btn = document.getElementById('btn');
btn.addEventListener("click", añadirTareas);

function deleteTask(e){
    console.log(e.target.dataset.id);
    let borrar = document.getElementById(e.target.dataset.id);
    borrar.remove();
}
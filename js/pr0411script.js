function añadirTareas(){
    let texto = document.getElementById("tarea");
    let listaTarea = document.createElement('div');
    listaTarea.innerHTML = texto.value;
    let list = document.getElementById("tareas");
    list.append(listaTarea);
    return true;
}
let btn = document.getElementById('btn');
btn.addEventListener("click", añadirTareas);
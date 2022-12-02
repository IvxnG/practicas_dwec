let tabla = document.getElementById('tabla');

for (let i=0;i<10;i++){
    let row = document.createElement('tr');
    for (let j=0;j<10;j++){
        let rowItem = document.createElement('td');
        rowItem.textContent = i*10 +j;
        row.appendChild(rowItem);
    }
    tabla.appendChild(row);
}
let tds = document.querySelectorAll('td');
    tds.forEach( (td) => {
        td.addEventListener('click', click);
        td.addEventListener('contextmenu', contextmenu);
} )

function click(event){
    let target = event.target;
    console.log(target);
    if(target.classList.contains('blocked')){
        console.log("Casilla bloqueada");
    }else{
        target.classList.toggle('selected');      
    }
}
function contextmenu(e){
    e.preventDefault();
    e.target.classList.add('blocked');
}
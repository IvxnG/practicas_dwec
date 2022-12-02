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
        td.addEventListener('click', position);
} )

function position(e){
    let coordX = document.getElementById('coordX');
    coordX.textContent = "X: " + e.pageX + "px";
    let coordY = document.getElementById('coordY');
    coordY.textContent = "Y: " + e.pageY + "px";
}
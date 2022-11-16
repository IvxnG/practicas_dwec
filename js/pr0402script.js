let dato = document.getElementById('months');
let meses = 'Enero Febrero Marzo Abril Mayo Junio Julio Agosto Septiembre Octubre Noviembre Diciembre'.split(' ');
/*
for (let i = 1; i <= 12; i++) {
    month.innerHTML += `<div class="month">
    <div class="month-number">${ i }</div>
    <div class="month-name">${ meses[i - 1] }</div>
    </div>`;
}
*/

meses.forEach( (month,index) => {
    let mainDiv = document.createElement('div');
    mainDiv.classList.add('month');
    let numberDiv = document.createElement('div');
    let nameDiv = document.createElement('div');
    numberDiv.classList.add("month-number");
    numberDiv.textContent = index + 1;
    nameDiv.classList.add("month-name");
    nameDiv.textContent = month;
    mainDiv.append(numberDiv);
    mainDiv.append(nameDiv);
    dato.append(mainDiv);
})
/*
for (let i = 1; i <= 12; i++) {
    
    let mesNumero = document.createElement('div');
    mesNumero.classList.add("month-number");
    mesNumero.textContent = i;
    dato.append(mesNumero);

    let mesNombre = document.createElement('div');
    mesNombre.classList.add("month-name");
    mesNombre.textContent = meses[i - 1];
    mesNumero.appendChild(mesNombre);
}
*/
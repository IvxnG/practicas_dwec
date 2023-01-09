let formulario = document.forms[0];
let comunidades = formulario.elements.comunidad;
let selectProvincia = formulario.elements.provincia;

function selectProvincias(){
    let claves = Object.keys(comunidadesEspaña[comunidades.value]);

    for(let i=0; i< claves.length; i++){
        let provincia = document.createElement('option');
        let clave = claves[i];
        console.log(claves[i]);
        provincia.textContent = "";
        provincia.textContent = clave;
        selectProvincia.appendChild(provincia);
    }
}


comunidades.onchange = function() {
    //console.log(comunidades.value);
    selectProvincias();
};


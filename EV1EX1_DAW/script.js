renderPage();

function renderPage() {
    let personajesLista = results.map( createPersonaje );


    let cajaPersonaje = document.getElementById('people-list-characters');
    cajaPersonaje.innerHTML = '';
    cajaPersonaje.append(...personajesLista);

    //listener de botones
    let buttons = document.querySelectorAll('.btn-char');
    buttons.forEach( (btn) => {
        btn.addEventListener( 'click', detalles );
    } )
}
//Crear el contenedor para el personaje y los elementos que contiene
function createPersonaje( {name,birth_year,homeworld} ) {
    // Div del personaje
    let personajes = document.createElement('div');
    personajes.classList.add('character');
    
    // Datos del personaje(nombre)
    let nombre = document.createElement('div');
    nombre.classList.add('character-name');
    nombre.innerHTML = name;
    personajes.append(nombre);

    // Datos del personaje(nacimiento)
    let nac = document.createElement('div');
    nac.classList.add('character-birth-year');
    //se muestra un guion si no tiene añño de nacimiento
    if(birth_year == null){
        nac.innerHTML = "-";
    }else{
        nac.innerHTML = birth_year;
    }

    personajes.append(nac);

    // Datos del personaje(planeta)
    let planeta = document.createElement('div');
    planeta.classList.add('character-homeworld');
    planeta.innerHTML = homeworld.name;
    
    personajes.append(planeta);

    // boton(detalle)
    let btn = document.createElement('div');
    btn.classList.add('btn');
    btn.classList.add('btn-char');
    btn.setAttribute('data-name', name);
    btn.innerHTML = "Detalle";
    personajes.append(btn);

    return personajes;
   
}
//buscar el nombre del personaje selecionado en la lista de personajes
function detalles( e ) {
    let personajeId = e.target.dataset.name;
    let personaje = results.find( (item) => item.name == personajeId);

    //nombre
    let nombre = document.getElementById('detail-name');
    nombre.innerHTML = personaje.name;

    //altura
    let altura = document.getElementById('height');
    //si no tien altura se muestra - si no su altura
    if(personaje.height == null){
        altura.innerHTML = "-";
    }else{
        altura.innerHTML = personaje.height;
    }
    

    //peso
    let peso = document.getElementById('mass');
    //si no tien peso se muestra - si no su peso
    if(personaje.mass == null){
        peso.innerHTML = "-";
    }else{
        peso.innerHTML = personaje.mass;
    }
   

    //pelo
    let pelo = document.getElementById('hair-color');
    pelo.innerHTML = personaje.hair_color;
    //ojos
    let ojos = document.getElementById('eye-color');
    ojos.innerHTML = personaje.eye_color;

    //nacimiento(fecha)
    let nacimiento = document.getElementById('birth-year');
    //si no tien fechaNac se muestra - si no su fechaNac
    if(personaje.birth_year == null){
        nacimiento.innerHTML = "-";
    }else{
        nacimiento.innerHTML = personaje.birth_year;
    }
    

    //nacimiento(planeta)
    let nacimientoPlaneta = document.getElementById('homeworld');
    
    if(personaje.homeworld.name == null){
        nacimientoPlaneta.innerHTML = "-";
    }else{
        nacimientoPlaneta.innerHTML = personaje.homeworld.name;
    }
    

    //poblacion Planeta natal
    let poblacion = document.getElementById('population');
    
    if(personaje.homeworld.population == null){
        poblacion.innerHTML = "-";
    }else{
        poblacion.innerHTML = personaje.homeworld.population;
    }
    

}
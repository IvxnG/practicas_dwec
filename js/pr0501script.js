let divs = document.querySelectorAll('div');
    divs.forEach( (div) => {
        div.addEventListener('click', click);
} )
function click(event) {
    let target = event.target;
    //target.classList.add('selected');
    target.classList.toggle('selected');
}

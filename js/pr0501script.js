let lis = document.querySelectorAll('li');
    lis.forEach( (li) => {
        li.addEventListener('click', click);
} )
function click(event) {
    let target = event.target;
    if (event.ctrlKey) {
        target.classList.toggle('selected'); 
    } else {
        if( target.classList.contains('selected')){
            lis.forEach( (li) => {
                li.classList.remove('selected');
            })
        } else{
            lis.forEach( (li) => {
                li.classList.remove('selected');
            })
            target.classList.add('selected');
        }
    }
}

let lista = document.getElementsByTagName('li');

Array.from(lista).forEach( (item) => {
    item.textContent = 'aaa';
})

let tablero = document.getElementById('board');


for (let i=0;i<9;i++){
    let div = document.createElement('div');
                div.classList.add("row");
                tablero.appendChild(div);
        
    if(i == 0){
        for (let i = 0; i < 9 ;i++){
            let letras = " A B C D E F G H".split(' ');
            let span = document.createElement('span');
                span.textContent = letras[i];
                span.classList.add("grey");
                div.appendChild(span);
        }
    }else{
        let span = document.createElement('span');
                span.textContent = i;
                span.classList.add("grey");
                div.appendChild(span);
        if( i%2 == 0){
            for (let i=0;i<8;i++){
                if(i%2==0){
                    let span = document.createElement('span');
                    span.classList.add("black");
                    div.appendChild(span);
                }else{
                    let span = document.createElement('span');
                    span.classList.add("white");
                    div.appendChild(span);
                }
            }
        }else{
            for (let i=0;i<8;i++){
                if(i%2==0){
                    let span = document.createElement('span');
                    span.classList.add("white");
                    div.appendChild(span);
                }else{
                    let span = document.createElement('span');
                    span.classList.add("black");
                    div.appendChild(span);
                }
            }
        } 
    }
}

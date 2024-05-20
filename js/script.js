const elementoGriglia = document.querySelector('section');


document.getElementById('grid-generator').addEventListener('click', function(){

    const gridContainer = document.getElementById('grid-container');
    gridContainer.innerHTML = ''; //così da ripulire il container una volta che si clicca il grid generator.

    for(let i=0 ; i<100; i++){
        const quadrati= document.createElement('article'); //questo serve a creare un article.
        quadrati.classList.add('square'); // serve a creare un quadrato.
        quadrati.append(i +1);

        quadrati.addEventListener('click', function(){  //qui creo una click function che mi permette di cambiare colore alle caselle una volta che vengono cliccate.
            quadrati.classList.add('active');
        });

        gridContainer.appendChild(quadrati);
    }


})
const elementoGriglia = document.querySelector('section');


document.getElementById('grid-generator').addEventListener('click', function(){

    const gridContainer = document.getElementById('grid-container');
    gridContainer.innerHTML = ''; //così da ripulire il container una volta che si clicca il grid generator.

    const celleTotali = 100;
    const bombeTotali = 16;
    let punteggio = 0;
    let gameEnded = false;

    function generaBombe(celleTotali, bombeTotali) { //genera bombe
        const bombs = [];
        while (bombs.length < bombeTotali) {
            const bombPosition = Math.floor(Math.random() * celleTotali) + 1;
            if (!bombs.includes(bombPosition)) {
                bombs.push(bombPosition);
            }
        }
        return bombs;
    }
    const bombs = generateBombs(celleTotali, bombeTotali); //controllo in console
    console.log('Bombs:', bombs);

    for(let i=0 ; i<celleTotali; i++){
        const quadrati= document.createElement('article'); //questo serve a creare un article.
        quadrati.classList.add('square'); // serve a creare un quadrato.
        quadrati.append(i +1);

        quadrati.addEventListener('click', function(){  //qui creo una click function che mi permette di cambiare colore alle caselle una volta che vengono cliccate.
            quadrati.classList.add('active');
        });

        gridContainer.appendChild(quadrati);
    }


})
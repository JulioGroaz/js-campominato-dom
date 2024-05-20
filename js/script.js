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
    const bombs = generaBombe(celleTotali, bombeTotali); //controllo in console
    console.log('Bombs:', bombs);

    for(let i=0 ; i<celleTotali; i++){
        const quadrati= document.createElement('article'); //questo serve a creare un article.
        quadrati.classList.add('square'); // serve a creare un quadrato.
        quadrati.append(i +1);

        quadrati.addEventListener('click', function(){  //qui creo una click function che mi permette di cambiare colore alle caselle una volta che vengono cliccate.
            if(gameEnded){ //se il gioco è finito allora non fare nulla
                return
            } else if(bombs.includes(i +1)){ //se all'interno della cella cliccata è presente una bomb allora non hai vinto.
                quadrati.classList.add('bomb');
                endGame(false);
            } else{ 
                if(!quadrati.classList.contains('active')){// controllo che non contenga già la classe active quindi se non è gia stato cliccato
                    quadrati.classList.add('active'); //allora metti in active e
                    punteggio++; // e aumenta di uno il punteggio

                    if(punteggio === celleTotali - bombeTotali){ // se tutte le celle sono state cliccate allora hai vinto.
                        endGame(true);
                    }

                }
            }
            quadrati.classList.add('active');
        });

        gridContainer.appendChild(quadrati);
    }
    //creo una funzion per la vittoria
    function endGame(won) {
        gameEnded = true;
        let esito = '';
    
        if (won) {
            esito = `HAI VINTO! IL TUO PUNTEGGIO è DI: ${punteggio}`;
        } else {
            esito = `HAI PERSO... IL TUO PUNTEGGIO è DI: ${punteggio}`;
        }
    
        document.getElementById('esito').innerText = esito;
    }
    
});
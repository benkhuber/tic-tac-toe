let gameboard = [0,0,0,0,0,0,0,0,0];

function renderGameboard() {
    let gameboardContainer = document.getElementsByClassName('gameboard-container');
    for (i=0; i < gameboard.length; i++) {
        let tile = document.createElement('div');
        tile.value = i;
        tile.classList.add('gameboard-cell');
        gameboardContainer[0].appendChild(tile);
    }
}

renderGameboard();




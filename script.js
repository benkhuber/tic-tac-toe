const game = {
    turnCounter: true,
    xArray: [],
    oArray: [],
    winningState: [
        ['1','2','3'],
        ['4','5','6'],
        ['7','8','9'],
        ['1','4','7'],
        ['2','5','8'],
        ['3','6','9'],
        ['1','5','9'],
        ['3','5','7'],
    ]
}

document.addEventListener('click', event => {
    const target = event.target;
    const isCell = target.classList.contains('cell');
    const isDisabled = target.classList.contains('disabled');

    if (isCell && !isDisabled) {
        const cellNumber = target.dataset.value
        game.turnCounter === true
            ? game.xArray.push(cellNumber)
            : game.oArray.push(cellNumber);
        event.target.classList.add(game.turnCounter ? 'x' : 'o');
        event.target.classList.add('disabled');
        game.turnCounter = !game.turnCounter;
}
if (!document.querySelectorAll('.cell:not(.disabled)').length) {
    alert("draw");
}

game.winningState.forEach(winningState => {
    const xWins = winningState.every(state => game.xArray.includes(state))
    const oWins = winningState.every(state => game.oArray.includes(state))

    if (xWins || oWins) {
       document.querySelectorAll('cell').forEach(cell => cell.classList.add('disabled'))
    }
})

})

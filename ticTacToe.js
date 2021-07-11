const body = document.querySelector('.body');
const gameWindow = body.querySelector('.game-window');
const gameCell = gameWindow.querySelector('.game__cell');
let playerTurn = 'cross'

function addSign(e) {
    if (e.target.className === 'game__cell game__cell-cross' || e.target.className === 'game__cell game__cell-zero') {
        return
    }
    if (playerTurn === 'cross') {
        playerTurn = 'zero';
        e.target.classList.add('game__cell-cross')
        return
    }
    if (playerTurn === 'zero') {
        playerTurn = 'cross';
        e.target.classList.add('game__cell-zero')
        return
    }
}

gameWindow.addEventListener('click', addSign);
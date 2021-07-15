const body = document.querySelector('.body');
const userWin = body.querySelector('.game__user-win');
const gameWindow = body.querySelector('.game__window');
const gameCellAll = body.querySelectorAll('.game__cell');
const resetButton = body.querySelector('.game__reset-button');
let cells = [{cell: false}, {cell: false}, {cell: false}, {cell: false}, {cell: false}, {cell: false}, {cell: false}, {cell: false}, {cell: false}];
let playerTurn = true;
let win = false

function playerChange () {
    if (playerTurn) {
        return 'CROSS';
    } else {
        return 'ZERO';
    }
}

function victoryCheck(whoseMove) {
    const victoryConditions = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
    victoryConditions.forEach((item) => {
        if (cells[item[0]].cell === `${whoseMove}` && cells[item[1]].cell === `${whoseMove}` && cells[item[2]].cell === `${whoseMove}`) {
            userWin.textContent = `${whoseMove} WIN`;
            win = true;
        }
    })
}

function addSign(e) {
    if (e.target.textContent == '' && !win) {
    cells[e.target.id].cell = `${playerChange()}`;
    if (playerChange() === 'CROSS') {
        e.target.textContent = 'x';
    } else {
        e.target.textContent = 'o';
    }
    victoryCheck(playerChange())
    }
    playerTurn = !playerTurn;
}

function reset() {
    cells.forEach((item) => { item.cell = false });
    userWin.textContent = '';
    playerTurn = true;
    win = false;
    gameCellAll.forEach((item) => {
        if (item.textContent) {
            item.textContent = '';
        }
    })
}

gameWindow.addEventListener('click', addSign);
resetButton.addEventListener('click', reset);

const body = document.querySelector('.body');
const userWin = body.querySelector('.user-win');
const gameWindow = body.querySelector('.game-window');
const gameCellAll = body.querySelectorAll('.game__cell');
const resetButton = body.querySelector('.reset-button');
let cells = [{cell: false}, {cell: false}, {cell: false}, {cell: false}, {cell: false}, {cell: false}, {cell: false}, {cell: false}, {cell: false}];
let playerTurn = true;
let win = false

function playerChange () {
    if (playerTurn) {
        return 'cross';
    } else {
        return 'zero';
    }
}

function victoryCheck(e) {
    const whoseСell = e.target.classList[1]
    const victoryConditions = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]
    victoryConditions.forEach((item) => {
        if (cells[item[0]].cell === `${whoseСell}` && cells[item[1]].cell === `${whoseСell}` && cells[item[2]].cell === `${whoseСell}`) {
            userWin.textContent = `${whoseСell} win`;
            win = !win;
        }
    })
}

function addSign(e) {
    if (e.target.className == 'game__cell' && !win) {
    cells[e.target.id].cell = `${playerChange()}`;
    playerTurn = !playerTurn;
    e.target.classList.add(`${cells[e.target.id].cell}`)
    victoryCheck(e)
    }
}

function reset() {
    cells.forEach((item) => { item.cell = false });
    userWin.textContent = '';
    playerTurn = true;
    win = false;
    gameCellAll.forEach((item) => {
        if (item.classList[1]) {
            item.classList.remove(item.classList[1])
        }
    })
}

gameWindow.addEventListener('click', addSign);
resetButton.addEventListener('click', reset);

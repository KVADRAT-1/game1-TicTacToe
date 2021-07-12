const body = document.querySelector('.body');
const userWin = body.querySelector('.user-win');
const gameWindow = body.querySelector('.game-window');
const gameCell = gameWindow.querySelector('.game__cell');
let playerTurn = 'cross'
let cells = [{cell: false}, {cell: false}, {cell: false}, {cell: false}, {cell: false}, {cell: false}, {cell: false}, {cell: false}, {cell: false}];

function check(e) {
    const whoseСell = e.target.classList[1]
    const victory = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]
    victory.forEach((item) => {
        if (cells[item[0]].cell === `${whoseСell}` && cells[item[1]].cell === `${whoseСell}` && cells[item[2]].cell === `${whoseСell}`) {
            userWin.textContent = `${whoseСell} win`;
        }
    })
}

function addSign(e) {
    console.log(e.target)
    if (e.target.className === 'game__cell cross' || e.target.className === 'game__cell zero') {
        return
    }
    if (playerTurn === 'cross') {
        playerTurn = 'zero';
        e.target.classList.add('cross')
        cells[e.target.id].cell = 'cross';
        check(e)
        return
    }
    if (playerTurn === 'zero') {
        playerTurn = 'cross';
        e.target.classList.add('zero')
        cells[e.target.id].cell = 'zero';
        check(e)
        return
    }
}

gameWindow.addEventListener('click', addSign);
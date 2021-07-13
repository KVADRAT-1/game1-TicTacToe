const body = document.querySelector('.body');
const userWin = body.querySelector('.user-win');
const gameWindow = body.querySelector('.game-window');
let cells = [{cell: false}, {cell: false}, {cell: false}, {cell: false}, {cell: false}, {cell: false}, {cell: false}, {cell: false}, {cell: false}];
let playerTurn = true;

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
        }
    })
}

function addSign(e) {
    if (e.target.className == 'game__cell') {
    cells[e.target.id].cell = `${playerChange()}`;
    playerTurn = !playerTurn;
    e.target.classList.add(`${cells[e.target.id].cell}`)
    victoryCheck(e)
    }
}

gameWindow.addEventListener('click', addSign);

// function addSign(e) {
//     if (e.target.className !== 'game__cell' && e.target.className == 'game-window') {
//         return
//     }
//     console.log(`${e.target.classList[1]}`)
//     if (playerTurn === 'cross') {
//         playerTurn = 'zero';
//         e.target.classList.add('cross')
//         cells[e.target.id].cell = 'cross';
//         check(e)
//         return
//     }
//     if (playerTurn === 'zero') {
//         playerTurn = 'cross';
//         e.target.classList.add('zero')
//         cells[e.target.id].cell = 'zero';
//         check(e)
//         return
//     }
// }
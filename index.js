import { victoryConditions } from './utils/config.js'
import { headerScore, game, gameCellAll, resetButton } from './utils/selector.js'

let scoreCross = 0;
let scoreZero = 0;
let playerTurn = 'x';
let win = false;

function victoryCheck() {
    victoryConditions.forEach((item) => {
        if (gameCellAll[item[0]].textContent === `${playerTurn}` && gameCellAll[item[1]].textContent === `${playerTurn}` && gameCellAll[item[2]].textContent === `${playerTurn}`) {
            if (playerTurn == 'x') { scoreCross ++ } else { scoreZero ++};
            headerScore.textContent = `${scoreCross} : ${scoreZero}`;
            win = true;
        }
    })
}

function addSign(e) {
    if (e.target.textContent == '' && !win) {
        gameCellAll[e.target.id].textContent = `${playerTurn}`;
    if (playerTurn === 'x') {
        e.target.textContent = 'x';
    } else {
        e.target.textContent = 'o';
    }
    victoryCheck()
    }
    if (playerTurn == 'x') {
        playerTurn = 'o';
    } else {
        playerTurn = 'x'; 
    }
}

function reset() {
    win = false;
    playerTurn = 'x';
    gameCellAll.forEach((item) => { item.textContent = '' });
}

game.addEventListener('click', addSign);
resetButton.addEventListener('click', reset);

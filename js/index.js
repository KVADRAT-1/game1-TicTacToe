import { victoryConditions } from '../utils/config.js';
import { headerClearFiearButton, headerScore, headerClearScoreButton, game, gameCellAll } from '../utils/selector.js';

let scoreCross = 0;
let scoreZero = 0;
let playerTurn = 'x';
let win = false;

function victoryCheck() {
    victoryConditions.forEach((item) => {
        if (gameCellAll[item[0]].textContent === `${playerTurn}` && gameCellAll[item[1]].textContent === `${playerTurn}` && gameCellAll[item[2]].textContent === `${playerTurn}`) {
            if (playerTurn == 'x') { scoreCross++ } else { scoreZero++};
            headerScore.textContent = `${scoreCross} : ${scoreZero}`;
            win = true;
        }
    })
}

function addSign(e) {
    if (e.target.textContent == '' && !win) {
        gameCellAll[e.target.id].textContent = `${playerTurn}`;
    if (playerTurn == 'x') {
        e.target.textContent = 'x';
        victoryCheck();
        playerTurn = 'o';
    } else {
        e.target.textContent = 'o';
        victoryCheck();
        playerTurn = 'x';
        }
    }
}

function clearFiear() {
    win = false;
    playerTurn = 'x';
    gameCellAll.forEach((item) => { item.textContent = '' });
}

function clearScore() {
    scoreCross = 0;
    scoreZero = 0;
    headerScore.textContent = `${scoreCross} : ${scoreZero}`;
}

game.addEventListener('click', addSign);
headerClearFiearButton.addEventListener('click', clearFiear);
headerClearScoreButton.addEventListener('click', clearScore);


const body = document.querySelector('.body');
const page = body.querySelector('.page');
const header = page.querySelector('.header');
const headerClearFiearButton = header.querySelector('.header__clear-fiear-button');
const headerScore = header.querySelector('.header__score');
const headerClearScoreButton = header.querySelector('.header__clear-score-button');
const game = page.querySelector('.game');
const gameCellAll = game.querySelectorAll('.game__cell');

export { headerClearFiearButton, headerScore, headerClearScoreButton, game, gameCellAll };
'use strict';

//getting the element
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');
const diceImage = document.querySelector('.dice');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn--new');
//starting condition

let scores, playing, activePlayer, currentScore;
const init = function () {
  scores = [0, 0];
  playing = true;
  //let activePlayer = false;
  activePlayer = 0;
  currentScore = 0;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
  diceImage.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
};
init();
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

btnRoll.addEventListener('click', function () {
  if (playing) {
    let randomNum = Math.trunc(Math.random() * 6) + 1;
    // if (randomNum !== 1) {
    //     if (randomNum === 2) {
    //       diceImage.src = 'dice-2.png';
    //     } else if (randomNum === 3) {
    //       diceImage.src = 'dice-3.png';
    //     } else if (randomNum === 4) {
    //       diceImage.src = 'dice-4.png';
    //     } else if (randomNum === 5) {
    //       diceImage.src = 'dice-5.png';
    //     } else if (randomNum === 6) {
    //       diceImage.src = 'dice-6.png';
    //     }
    //     sum0 = sum0 + randomNum;
    //     current0El.textContent = sum0;
    //   } else {
    //     diceImage.src = 'dice-1.png';
    //     current0El.textContent = 1;
    //   }

    diceImage.classList.remove('hidden');
    diceImage.src = `dice-${randomNum}.png`;

    if (randomNum !== 1) {
      //     if (!activePlayer) {
      //       sum0 = sum0 + randomNum;
      //       current0El.textContent = sum0;
      //     } else if (activePlayer) {
      //       sum1 = sum1 + randomNum;
      //       current1El.textContent = sum1;
      //     }
      currentScore = currentScore + randomNum;
      document.getElementById(
        `current--${activePlayer}`
      ).textContent = currentScore;
      //
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    //   document.getElementById(`score--${activePlayer}`).textContent =
    //     Number(document.getElementById(`score--${activePlayer}`).textContent) +
    //     currentScore;

    scores[activePlayer] = scores[activePlayer] + currentScore;

    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (
      Number(document.getElementById(`score--${activePlayer}`).textContent) >=
      50
    ) {
      playing = false;

      diceImage.classList.add('hidden');

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      switchPlayer();
    }

    // randomNum = Math.trunc(Math.random() * 6) + 1;
  }
});

btnNew.addEventListener('click', init);

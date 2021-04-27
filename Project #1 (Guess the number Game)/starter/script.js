'use strict';

//selecting the html text content using query selector and changing the text values
// let str = document.querySelector('.message').textContent;
// console.log(str);

// let title = document.querySelector('.btn').textContent;
// console.log(title);

// document.querySelector('.message').textContent = 'Changing content';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// //setting the value of input field
// document.querySelector('.guess').value = 22;
// console.log(document.querySelector('.guess').value);
// defining the secretNumber
let secretNumber = Math.trunc(Math.random() * 20) + 1;

//updated Number
let updatedScore = Number(document.querySelector('.score').textContent);
console.log(typeof updatedScore, updatedScore);

let highScore = 0;

// if user click on Again button
document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.message').textContent = 'Start guessing...';
  updatedScore = '20';
  let resetNum = Math.trunc(Math.random() * 20) + 1;
  secretNumber = resetNum;
  document.querySelector('.score').textContent = '20';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //console.log(typeof guess, guess);

  //when no input
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number entered';
  }
  // when player choose correct number
  else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.message').textContent = 'correct number';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (updatedScore > highScore) {
      highScore = updatedScore;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
  // when input is wrong
  else if (guess !== secretNumber) {
    if (updatedScore > 1) {
      updatedScore = updatedScore - 1;
      document.querySelector('.score').textContent = updatedScore;

      document.querySelector('.message').textContent =
        guess > secretNumber
          ? 'Not a correct Number, try lower number !'
          : 'Not a correct Number, try higher number !';
    } else {
      document.querySelector('.message').textContent = 'You have lost the Game';
    }
  }
});

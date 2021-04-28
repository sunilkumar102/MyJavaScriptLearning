'use strict';
const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.close-modal');

const btnsAll = document.querySelectorAll('.show-modal');

//function to open the modal window
const openmodalFunction = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < btnsAll.length; i++) {
  btnsAll[i].addEventListener('click', openmodalFunction);
}

// function to close the modal window
const closemodalFunction = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

closeModal.addEventListener('click', closemodalFunction);
overlay.addEventListener('click', closemodalFunction);

document.addEventListener('keydown', function (e) {
  if (e.code === 'Escape' && !modal.classList.contains('hidden')) {
    closemodalFunction();
  }
});

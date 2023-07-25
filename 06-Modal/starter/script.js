'use strict';

// Store the modal in an element
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');

// Collect ALL 3 buttons in one variable using querySelectorAll.
// Restructuring the code without changing the functionality. Below, we can open and close in 2 ways, in one function, and interact with all butson, in one loop
let btnsOpenModal = document.querySelectorAll('.show-modal');

const openModal = function () {
  modal.classList.remove('hidden'); // Showing the modal
  overlay.classList.remove('hidden'); // Allowing overlay bground/blur effect.
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

//* Let's setup the listener
for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

//Setting up a Keypress Event Listener when a keydown event happens with the escape key.
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

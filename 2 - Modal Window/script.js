'use strict';

const modal = document.querySelector('.modal');

const overlay = document.querySelector('.overlay');

const btnCloseModal = document.querySelector('.close-modal');

const btnShowModal = document.querySelectorAll('.show-modal');

const handleShowModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const handleCloseModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnShowModal.length; i++) {
  btnShowModal[i].addEventListener('click', handleShowModal);
}

btnCloseModal.addEventListener('click', handleCloseModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    handleCloseModal();
  }
});

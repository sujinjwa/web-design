const modalButton = document.querySelector('.modal-button');

const closeModal = () => {
  const child = document.querySelector('.modal > img');
  modal.removeChild(child);
  modalWrapper.classList.remove('active');
};

modalButton.addEventListener('click', closeModal);

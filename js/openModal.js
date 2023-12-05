const modalWrapper = document.querySelector('.modal-wrapper');
const modal = document.querySelector('.modal');
const grid = document.querySelector('.grid');

const openModal = (e) => {
  if (e.target.nodeName === 'IMG') {
    const modalImg = document.createElement('img');
    modalImg.src = e.target.src;
    modalImg.style.objectFit = 'contain';
    modalImg.style.width = '100%';
    modal.insertAdjacentElement('afterbegin', modalImg);
    modalWrapper.classList.add('active');
  }
};

grid.addEventListener('click', openModal);

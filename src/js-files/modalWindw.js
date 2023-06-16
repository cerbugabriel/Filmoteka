// card version
const filmImage = document.querySelector('.image');
const modal = document.getElementById('film_info_modal');
const modalImageContainer = document.querySelector('.img_content');
const closeModal = document.getElementById('close-button');

filmImage.addEventListener('click', () => {
  modalImageContainer.innerHTML = `<img src="${filmImage.src}">`;
  modal.showModal();
});

closeModal.addEventListener('click', () => {
  modal.close();
});

// const filmImage = document.querySelector('#movie');
// console.log(filmImage);
// const modal = document.getElementById('film_info_modal');
// const modalImageContainer = document.querySelector('.img_content');

// filmImage.addEventListener('click', event => {
//   console.log(filmImage);
//   console.log('event.target: ', event.target);
//   console.log('event.currentTarget: ', event.currentTarget);
// });

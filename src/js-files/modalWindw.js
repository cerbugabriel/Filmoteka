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

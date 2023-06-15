const modal = document.getElementById('film_info_modal');
const modalWind = document.getElementById('modal');
const closeLocationModal = document.querySelector('.close-button');
const openLocationModal = document.querySelector('.image');

openLocationModal.addEventListener('click', () => {
  locationModal.showModal();
});

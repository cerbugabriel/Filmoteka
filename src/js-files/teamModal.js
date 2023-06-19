const modal = document.querySelector('#teamModal');
const openteamModal = document.querySelector('#request_button');
const closeteamModal = document.querySelector('.team-close-modal');

openteamModal.addEventListener('click', () => {
  modal.showModal();
});

closeteamModal.addEventListener('click', () => {
  teamModal.close();
});

window.onclick = e => {
  if (e.target == modal) {
    teamModal.close();
  }
};

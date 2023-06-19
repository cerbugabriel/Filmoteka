import getElement from './getElement';
import {
  getStorageItem,
  adjunstQueueBtns,
  adjunstWatchBtns,
} from './locatStorage';

const modal = getElement('#film_info_modal');
const modalImageContainer = getElement('.img_content');
const modalVotes = getElement('.film-detail_votes');
const modalFilmName = getElement('.film_title');
const modalFilmPopularity = getElement('.film-detail_popularity');
const modalOriginaFilmTitle = getElement('.film-detail_original-title');
const modalFilmGenre = getElement('.film-detail_genre');
const modalFilmDescription = getElement('.film-detail_description');

const watchBtn = getElement('watch');
const queueBtnt = getElement('queue');

const closeModal = getElement('#close-button');

const gallery = getElement('.gallery');

gallery.addEventListener('click', galleryHandler);

function galleryHandler(e) {
  const element = e.target.parentNode;
  //average work
  const elementInfo = element.querySelector('.modal-info');
  const voteCount = elementInfo.getAttribute('data-vote-count');
  const average = elementInfo.getAttribute('data-vote-avg');
  const numm = Number(average);
  const averageRounded = Math.round(numm * 10) / 10;
  modalVotes.innerHTML = `Vote / Votes: ${averageRounded} / ${voteCount}`;

  //image work
  const movieImage = element.querySelector('img');
  const imageLink = movieImage.getAttribute('src');
  modalImageContainer.innerHTML = `<img src="${imageLink}">`;

  //film title
  const containerInfoTitle = element.querySelector('.container-info b');
  const filmName = containerInfoTitle.textContent;
  modalFilmName.innerHTML = ` ${filmName} `;

  //film popularity
  const filmPopularity = elementInfo.getAttribute('data-popularity');
  const number = Number(filmPopularity);
  const popularityNumber = Math.round(number);
  modalFilmPopularity.innerHTML = `Popularity: ${popularityNumber} `;

  //film original title
  const filmOriginalName = elementInfo.getAttribute('data_original_title');
  const originalTitle =
    filmOriginalName === 'undefined' ? filmName : filmOriginalName;
  modalOriginaFilmTitle.innerHTML = `Original-title: ${originalTitle} `;

  //film genre
  const containerInfo = element.querySelector('.container-info');
  const description = containerInfo.querySelector('.cont-descr');
  const genre = description.querySelector('p').textContent;
  modalFilmGenre.innerHTML = `Genre: ${genre}`;

  //about film
  const filmDescription = elementInfo.getAttribute('data-about');
  modalFilmDescription.innerHTML += ` ${filmDescription} `;

  // add movie id to the modal
  const modalContainer = getElement('.modal');
  const movieId = element.dataset.id;
  modalContainer.dataset.movieId = movieId;
  // btns
  let watchStorage = getStorageItem(toWatch);
  let queueStorage = getStorageItem(toQueue);

  console.log(watchBtn);
  adjunstWatchBtns(watchStorage, watchBtn, movieId);
  adjunstQueueBtns(queueStorage, queueBtnt, movieId);

  modal.showModal();
}

closeModal.addEventListener('click', () => {
  clearModalOnClose();
  modal.close();
});

function clearModalOnClose() {
  const modalDataElements = modal.querySelectorAll('[class*="film-detail"]');

  modalDataElements.forEach(element => {
    element.innerHTML = '';
  });
}

window.onclick = e => {
  console.log(e.target);
};

window.onclick = e => {
  if (e.target == modal) {
    clearModalOnClose();
    modal.close();
  }
};


// team modal

// Modal 2
const teamModal = document.querySelector('.backdrop-modal');
const openteamModal = document.querySelector('#modalWindow');
const closeteamModal = document.querySelector('.close-modal-team');

openteamModal.addEventListener('click', () => {
  teamModal.showModal();
});

closeteamModal.addEventListener('click', () => {
  teamModal.close();
});


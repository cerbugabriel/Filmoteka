import { getElement } from './library-utils';
import { getStorageItem, getIds } from './library-utils';
import { buildsLibrary } from '../buildLibrary';

const toWatch = 'toWatch';
const toQueue = 'toQueue';
const libraryModal = getElement('.library-film_info_modal .modal');
const setStorageItem = (name, item) => {
  localStorage.setItem(name, JSON.stringify(item));
};
const watchBtn = getElement('button[data-whichLibrary="watched"]');
const queueBtn = getElement('button[data-whichLibrary="queue"]');

export const libraryLocalStorageHandle = () => {
  libraryModal.addEventListener('click', e => {
    const clickedElement = e.target;
    const id = e.currentTarget.dataset.movieId;
    let watchStorage = getStorageItem(toWatch);
    let queueStorage = getStorageItem(toQueue);
    const watchIds = getIds(watchStorage);
    const queueIds = getIds(queueStorage);
    const movie = { id: id };
    if (clickedElement.dataset.action === 'toWatch') {
      if (!watchIds.includes(id)) {
        watchStorage.push(movie);
        setStorageItem(toWatch, watchStorage);
        clickedElement.textContent = 'REMOVE FROM WATCHED';
        clickedElement.dataset.action = 'toWatchRmv';
      }
      watchBtn.classList.add('active-library');
      queueBtn.classList.remove('active-library');
      buildsLibrary(toWatch);
    } else if (clickedElement.dataset.action === 'toQueue') {
      if (!queueIds.includes(id)) {
        queueStorage.push(movie);
        setStorageItem(toQueue, queueStorage);
        clickedElement.textContent = 'REMOVE FROM QUEUE';
        clickedElement.dataset.action = 'toQueueRmv';
      }
      queueBtn.classList.add('active-library');
      watchBtn.classList.remove('active-library');
      buildsLibrary(toQueue);
    } else if (clickedElement.dataset.action === 'toWatchRmv') {
      watchStorage = watchStorage.filter(movie => movie.id !== id);
      setStorageItem(toWatch, watchStorage);
      clickedElement.textContent = 'ADD TO WATCHED';
      clickedElement.dataset.action = 'toWatch';
      watchBtn.classList.add('active-library');
      queueBtn.classList.remove('active-library');
      buildsLibrary(toWatch);
    } else if (clickedElement.dataset.action === 'toQueueRmv') {
      queueStorage = queueStorage.filter(movie => movie.id !== id);
      setStorageItem(toQueue, queueStorage);
      clickedElement.textContent = 'ADD TO QUEUE';
      clickedElement.dataset.action = 'toQueue';
      queueBtn.classList.add('active-library');
      watchBtn.classList.remove('active-library');
      buildsLibrary(toQueue);
    }
  });
};
// just for test

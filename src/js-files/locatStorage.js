// imports
import getElement from './getElement';

export const toWatch = 'toWatch';
export const toQueue = 'toQueue';

export const getStorageItem = item => {
  let storageItem = localStorage.getItem(item);
  if (storageItem) {
    storageItem = JSON.parse(localStorage.getItem(item));
  } else {
    storageItem = [];
  }
  return storageItem;
};

const setStorageItem = (name, item) => {
  localStorage.setItem(name, JSON.stringify(item));
};

export const addToLocalStorag = () => {
  const modalWindow = getElement('.modal');
  modalWindow.addEventListener('click', e => {
    const clickedElement = e.target;
    const id = e.currentTarget.dataset.movieId;
    const movie = { id: id };

    if (clickedElement.dataset.action === 'toWatch') {
      let storage = getStorageItem(toWatch);
      console.log(storage);
      storage.push(movie);
      setStorageItem(toWatch, storage);
    }
    if (clickedElement.dataset.action === 'toQueue') {
      let storage = getStorageItem(toQueue);
      storage.push(movie);
      setStorageItem(toQueue, storage);
    }
  });
};

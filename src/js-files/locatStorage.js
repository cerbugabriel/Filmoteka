// imports
import getElement from './getElement.js';

export const toWatch = 'toWatch';
export const toQueue = 'toQueue';
const modalWindow = getElement('.modal');
const gallery = getElement('.gallery');

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
  modalWindow.addEventListener('click', e => {
    const clickedElement = e.target;
    const id = e.currentTarget.dataset.movieId;
    let watchStorage = getStorageItem(toWatch);
    let queueStorage = getStorageItem(toQueue);
    const watchIds = getIds(watchStorage);
    const queueIds = getIds(queueStorage);
    const movie = { id: id };
    const card = e.currentTarget;
    if (clickedElement.dataset.action === 'toWatch') {
      if (!watchIds.includes(id)) {
        watchStorage.push(movie);
        setStorageItem(toWatch, watchStorage);
        clickedElement.textContent = 'REMOVE FROM WATCHED';
        clickedElement.dataset.action = 'toWatchRmv';
      }
    } else if (clickedElement.dataset.action === 'toQueue') {
      if (!queueIds.includes(id)) {
        queueStorage.push(movie);
        setStorageItem(toQueue, queueStorage);
        clickedElement.textContent = 'REMOVE FROM QUEUE';
        clickedElement.dataset.action = 'toQueueRmv';
      }
    } else if (clickedElement.dataset.action === 'toWatchRmv') {
      watchStorage = watchStorage.filter(movie => movie.id !== id);
      setStorageItem(toWatch, watchStorage);
      clickedElement.textContent = 'TO WATCHED';
      clickedElement.dataset.action = 'toWatch';
    } else if (clickedElement.dataset.action === 'toQueueRmv') {
      if (!queueIds.includes(id)) {
        queueStorage = queueStorage.filter(movie => movie.id !== id);
        setStorageItem(toQueue, queueStorage);
        clickedElement.textContent = 'ADD TO QUEUE';
        clickedElement.dataset.action = 'toQueue';
      }
    }

    // handleBtns(card, watchStorage, queueStorage, id);
  });
};

function getIds(arr) {
  const arrIds = [];
  arr.forEach(movie => {
    arrIds.push(movie.id);
  });
  return arrIds;
}

// export function handleBtns(container, watchStorage, queueStorage, id) {
//   console.log(container);
//   const watchBtn = container.querySelector('button[data-action="toWatch"]');
//   const queueBtn = container.querySelector('button[data-action="toQueue"]');
//   const queueRmvBtn = container.querySelector(
//     'button[data-action="toQueueRmv"]'
//   );
//   const watchRmvBtn = container.querySelector(
//     'button[data-action="toWatchRmv"]'
//   );
//   const watchIds = getIds(watchStorage);
//   const queueIds = getIds(queueStorage);
//   if (watchBtn) {
//     if (watchIds.includes(id)) {
//       watchBtn.textContent = 'REMOVE FROM WATCHED';
//       watchBtn.dataset.action = 'toWatchRmv';
//     }
//   }
//   if (watchRmvBtn) {
//     if (!watchIds.includes(id)) {
//       watchRmvBtn.textContent = 'TO WATCHED';
//       watchRmvBtn.dataset.action = 'toWatch';
//     }
//   }
//   if (queueBtn) {
//     if (queueIds.includes(id)) {
//       queueBtn.textContent = 'REMOVE FROM WATCHED';
//       queueBtn.dataset.action = 'toQueueRmv';
//     }
//   }
//   if (queueRmvBtn) {
//     if (!queueIds.includes(id)) {
//       queueRmvBtn.textContent = 'ADD TO QUEUE';
//       queueRmvBtn.dataset.action = 'toQueue';
//     }
//   }
// }

export const adjunstWatchBtns = (watchStorage, queueBtn, id) => {
  const watchedIds = getIds(watchStorage);
  if (queueBtn.dataset.action === 'toQueue') {
    if (watchedIds.includes(id)) {
      queueBtn.textContent = 'REMOVE FROM QUEUE';
      queueBtn.dataset.action = 'toWatchRmv';
    }
  }
  if (queueBtn.dataset.action === 'toQueueRmv') {
    if (!watchedIds.includes(id)) {
      queueBtn.textContent = 'TO WATCHED';
      queueBtn.dataset.action = 'toWatch';
    }
  }
};

export const adjunstQueueBtns = (queueStorage, watchBtn, id) => {
  const watchedIds = getIds(queueStorage);
  if (watchBtn.dataset.action === 'toQueue') {
    if (watchedIds.includes(id)) {
      watchBtn.textContent = 'REMOVE FROM QUEUE';
      watchBtn.dataset.action = 'toWatchRmv';
    }
  }
  if (watchBtn.dataset.action === 'toQueueRmv') {
    if (!watchedIds.includes(id)) {
      watchBtn.textContent = 'ADD TO QUEUE';
      watchBtn.dataset.action = 'toQueue';
    }
  }
};

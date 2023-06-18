// imports
import { toQueue, toWatch, getStorageItem } from './locatStorage.js';
import { displayMovies } from './fetch-library.js';

export const buildsLibrary = async () => {
  let selectedLibrary = toWatch;
  const localStorageMovies = getStorageItem(selectedLibrary);
  displayMovies(localStorageMovies);
};

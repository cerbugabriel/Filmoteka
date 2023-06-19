// imports
import { getIds } from './library-utils';
import axios from 'axios';
import Notiflix from 'notiflix';

const toWatch = 'toWatch';
const toQueue = 'toQueue';
const API_KEY = '53b2ac0d64cbeedea763734f4fe8a4ce';
const BASE_URL_ID = 'https://api.themoviedb.org/3/movie/';
// https://api.themoviedb.org/3/movie/298618?api_key=53b2ac0d64cbeedea763734f4fe8a4ce

const getStorageItem = item => {
  let storageItem = localStorage.getItem(item);
  if (storageItem) {
    storageItem = JSON.parse(localStorage.getItem(item));
  } else {
    storageItem = [];
  }
  return storageItem;
};

export const buildsLibrary = async () => {
  let selectedLibrary = toWatch;
  let localStorageMovies = getStorageItem(selectedLibrary);
  localStorageMovies = getIds(localStorageMovies);
  const movies = await moviesDetails(localStorageMovies);

  console.log(movies);
};

const moviesDetails = async localStorageMovies => {
  const movieDetailsArray = [];
  await Promise.all(
    localStorageMovies.map(async movie => {
      try {
        const url = `${BASE_URL_ID}${movie}?api_key=${API_KEY}`;
        const resp = await axios.get(url);
        const data = resp.data;
        movieDetailsArray.push(data);
      } catch (err) {
        console.log(err);
      }
    })
  );
  return movieDetailsArray;
};

// async function fetchMovie(movie) {

// }

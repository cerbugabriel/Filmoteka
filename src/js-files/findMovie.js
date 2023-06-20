//  imports
import axios from 'axios';
import { fetchAllMovies } from './fetchMovies';
import getElement from './getElement';
import {
  showLoader,
  hideLoader,
  showNotificationEmtyValue,
  tooManyMovies,
} from './loader';
import { fetchAllMovies } from './fetchMovies';
import { createButtons } from './createButtons';
import { getMoviesType } from './fetchMovies';
import { setupGallery } from './setupGallery';

const SEARCH_BASE_URL = `https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=`;
const apiKeyPlus = '&api_key=53b2ac0d64cbeedea763734f4fe8a4ce&query=';
// https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1&api_key=53b2ac0d64cbeedea763734f4fe8a4ce&query=;

const searchInput = getElement('#form__search input');
const form = getElement('#form__search');
const moviesGallery = getElement('.gallery');
const btnsContainer = getElement('.pagination');

export const findMovie = async () => {
  form.addEventListener('submit', async e => {
    e.preventDefault();
    showLoader();
    try {
      const searchValue = searchInput.value.trim();
      if (searchValue === '') {
        fetchAllMovies();
        showNotificationEmtyValue();
      } else {
        const currentPage = 1;
        const url = `${SEARCH_BASE_URL}${currentPage}${apiKeyPlus}${searchValue}`;
        const resp = await axios.get(url);
        const data = resp.data;
        const totalPages = data.total_pages;
        if (totalPages > 1) {
          tooManyMovies();
        }
        const movies = data.results;
        const movieTypes = await getMoviesType();
        setupGallery(movies, movieTypes, moviesGallery);
        window.scrollTo({ top: 0, behavior: 'smooth' });
        btnsContainer.classList.add('is-hidden');
      }
      console.log(searchValue);
    } catch (err) {
      console.log(err);
    } finally {
      hideLoader();
    }
  });
};

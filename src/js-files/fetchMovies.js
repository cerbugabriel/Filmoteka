// importsxios
import axios from 'axios';
import { API_KEY, BASE_URL, currentPage } from '../js-files/utils.js';
import { setupGallery } from './setupGallery.js';
import { createButtons } from './createButtons.js';
import { showLoader, hideLoader, showNotification } from './loader.js';
import getElement from './getElement.js';
const btnsContainer = getElement('.pagination');

// exports
export const fetchAllMovies = async () => {
  showLoader();
  if (btnsContainer.classList.contains('is-hidden')) {
    btnsContainer.classList.remove('is-hidden');
  }
  try {
    const moviesGallery = getElement('.gallery');

    const data = await getAllMovies();
    let totalPages = data.total_pages;
    totalPages = totalPages / 2;
    const movies = data.results;
    const movieTypes = await getMoviesType();
    setupGallery(movies, movieTypes, moviesGallery);
    createButtons(totalPages);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } catch (err) {
    console.log(err);
    showNotification();
  } finally {
    hideLoader();
  }
};

export async function getAllMovies() {
  try {
    const url = `${BASE_URL}/trending/all/day?page=${currentPage}&api_key=${API_KEY}`;
    const resp = await axios.get(url);
    const data = resp.data;
    return data;
  } catch (err) {
    console.log(err);
  }
}

export async function getMoviesType() {
  try {
    const url = `${BASE_URL}/genre/movie/list?api_key=${API_KEY}`;
    const resp = await axios.get(url);
    let data = resp.data;
    data = data.genres;
    return data;
  } catch (err) {
    console.log(err);
  }
}

export async function getFilteredMovies(obiect) {
  try {
    const searchParams = new URLSearchParams({
      api_key: `${API_KEY}`,
      primary_release_year: obiect.year,
      with_genres: this.genre,
    });
    const url = `${BASE_URL}/discover/movie?${searchParams}`;
    // const url = `${BASE_URL}/discover/movie?${searchParams}&vote_average.gte=${obiect.vote}`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    return error;
  }
}

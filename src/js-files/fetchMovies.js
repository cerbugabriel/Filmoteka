// importsxios//currentPage
import axios from 'axios';
import { API_KEY, BASE_URL } from '../js-files/utils.js';
import { setupGallery } from './setupGallery.js';
import { createButtons } from './createButtons.js';
import {
  showLoader,
  hideLoader,
  showNotification,
  showNotificationEmtyValue,
  noMovie,
} from './loader.js';
import { changeNoteColor } from './change-note-color.js';
import getElement from './getElement.js';
const btnsContainer = getElement('.pagination');
const SEARCH_BASE_URL = `https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=`;
const apiKeyPlus = '&api_key=53b2ac0d64cbeedea763734f4fe8a4ce&query=';
const searchInput = getElement('#form__search input');
const form = getElement('#form__search');
const moviesGallery = getElement('.gallery');
let searchValue = '';
export let btnsFor = 'allMovies';

export let currentPage = 1;
// exports
export const handlePagination = () => {
  const btnsContainer = getElement('.pagination');
  btnsContainer.addEventListener('click', goToPage);
};
// functions

function goToPage(e) {
  const btn = e.target;

  if (btn.dataset.page) {
    let pageNum = btn.dataset.page;
    pageNum = Number(pageNum);
    currentPage = pageNum;
    if (btnsFor === 'allMovies') {
      fetchAllMovies();
    }
    if (btnsFor === 'search') {
      findMovieToPage();
    }
  }
  if (btn.dataset.prev) {
    currentPage = currentPage - 1;
    if (btnsFor === 'allMovies') {
      fetchAllMovies();
    }
    if (btnsFor === 'search') {
      findMovieToPage();
    }
  }
  if (btn.dataset.next) {
    currentPage = currentPage + 1;
    if (btnsFor === 'allMovies') {
      fetchAllMovies();
    }
    if (btnsFor === 'search') {
      findMovieToPage();
    }
  }
}

// exports
export const fetchAllMovies = async () => {
  showLoader();
  btnsFor = 'allMovies';
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
    changeNoteColor();
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

export const findMovie = async () => {
  form.addEventListener('submit', async e => {
    e.preventDefault();
    showLoader();
    btnsFor = 'search';
    currentPage = 1;
    searchValue = searchInput.value;
    try {
      if (searchValue === '') {
        fetchAllMovies();
        showNotificationEmtyValue();
        return;
      }
      searchInput.value = searchValue;
      const url = `${SEARCH_BASE_URL}${currentPage}${apiKeyPlus}${searchValue}`;
      const resp = await axios.get(url);
      const data = resp.data;
      const totalResults = data.total_results;
      const totalPages = data.total_pages;
      const movies = data.results;
      const movieTypes = await getMoviesType();
      setupGallery(movies, movieTypes, moviesGallery);
      if (totalResults === 0) {
        noMovie();
        fetchAllMovies();
      }
      if (totalPages > 1) {
        createButtons(totalPages);
      } else {
        btnsContainer.classList.add('is-hidden');
      }
      changeNoteColor();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (err) {
      console.log(err);
    } finally {
      hideLoader();
    }
  });
};

export const findMovieToPage = async () => {
  showLoader();
  searchInput.value = searchValue;
  try {
    if (searchValue === '') {
      fetchAllMovies();
      showNotificationEmtyValue();
      return;
    }
    const url = `${SEARCH_BASE_URL}${currentPage}${apiKeyPlus}${searchValue}`;
    const resp = await axios.get(url);
    const data = resp.data;
    const totalResults = data.total_results;
    const totalPages = data.total_pages;
    const movies = data.results;
    const movieTypes = await getMoviesType();

    setupGallery(movies, movieTypes, moviesGallery);
    if (totalResults === 0) {
      noMovie();
      fetchAllMovies();
    }
    createButtons(totalPages);
    changeNoteColor();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } catch (err) {
    console.log(err);
  } finally {
    hideLoader();
  }
};

export async function getFilteredMovies(filter) {
  try {
    const searchParams = new URLSearchParams({
      api_key: `${API_KEY}`,
      primary_release_year: filter.year,
      with_genres: filter.genre,
    });
    // const url = `${BASE_URL}/discover/movie?${searchParams}`;
    const url = `${BASE_URL}/discover/movie?${searchParams}&vote_average.gte=${filter.vote}`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    return error;
  }
}

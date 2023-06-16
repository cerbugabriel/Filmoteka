// imports
import axios from 'axios';
import { API_KEY, currentPage, BASE_URL } from '../js-files/utils.js';
import { setupGallery } from './setupGallery.js';
import { createButtons } from './createButtons.js';

// exports
export const fetchAllMovies = async () => {
  try {
    const url = `${BASE_URL}/trending/all/day?page=${currentPage}&api_key=${API_KEY}`;
    const resp = await axios.get(url);
    const data = resp.data;
    let totalPages = data.total_pages;
    totalPages = totalPages / 2;
    const movies = data.results;
    const movieTypes = await getMoviesType();
    setupGallery(movies, movieTypes);
    createButtons(totalPages);
  } catch (err) {
    console.log(err);
  }
};

async function getMoviesType() {
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

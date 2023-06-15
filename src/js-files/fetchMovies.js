// importsxios
import axios from 'axios';
import { API_KEY } from '../js-files/utils.js';
import { currentPage } from '../js-files/utils.js';
import { setupGallery } from './setupGallery.js';
// let currentPage = '3';

// exports
export const fetchAllMovies = async () => {
  try {
    const url = `https://api.themoviedb.org/3/trending/all/day?language=en-US&page=${currentPage}&api_key=${API_KEY}`;

    const resp = await axios.get(url);
    const data = resp.data;
    const movies = data.results;
    setupGallery(movies);
  } catch (err) {
    console.log(err);
  }
};

// imports
import { fetchAllMovies } from './js-files/fetchMovies';
import { handlePagination } from './js-files/utils';
import { fetchPopularMovies } from './js-files/carousel';

const init = async () => {
  fetchAllMovies();
  handlePagination();
  fetchPopularMovies();
};

window.addEventListener('DOMContentLoaded', init);

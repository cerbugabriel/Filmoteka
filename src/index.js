// imports
import { fetchAllMovies } from './js-files/fetchMovies';
import { handlePagination } from './js-files/utils';
import { fetchPopularMovies } from './js-files/carousel';
import { addToLocalStorag } from './js-files/locatStorage';

const init = async () => {
  fetchPopularMovies();
  fetchAllMovies();
  handlePagination();
  addToLocalStorag();
};

window.addEventListener('load', init);
